<template>
  <div class="calories">
    <h1>Meal Plan ({{calTotal}})</h1>
    <form v-on:submit.prevent="addItem">
      <input type="text" v-model="message">
      <input type="number" v-model="calCount">
      <button type="submit">Add</button>
    </form>
    <div class="controls">
      <button v-on:click="showAll()">Show All</button>
      <button v-on:click="showActive()">Show Active</button>
      <button v-on:click="showHidden()">Show Hidden</button>
      <!-- <button v-on:click="deleteHidden()">Delete Hidden</button> -->
      <button v-on:click="deleteAll()">Delete All</button>
    </div>
    <ul>
      <li v-for="item in filteredItems" draggable="true" v-on:dragstart="dragItem(item,$event)" v-on:dragover.prevent v-on:drop="dropItem(item)">
	<input type="checkbox" v-model="item.hidden" v-on:click="hideItem(item)" /><label v-bind:class="{ hidden: item.hidden }">{{ item.text }}</label><button v-on:click="deleteItem(item)" class="delete">X</button>
      </li>
    </ul>
    <div class="footer">
    <a href="github.com">My Github</a>
    </div>
  </div>
</template>

/*<script>
 export default {
  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  console.log("here!");
	$("#foodSubmit").click(function (e) {
		e.preventDefault();
		var value = $("#foodInput").val();
    console.log("here");
		var foodurl = "https://trackapi.nutritionix.com/v2/search/instant?query=" + value + "?x-app-id=978f08a3&x-app-key=f5c2d0c77b1f737c6841ff273674eed7";
		$.ajax({
			url: foodurl,
			dataType: "json",
			success: function (json) {
				console.log(json);
				$("#FoodResults").html(results);
			}
		});
	});
 }
</script>*/

<script>
 export default {
   name: 'Calories',
   data () {
     return {
       items: [],
       message: '',
       calCount: 0,
       calories: [],
       show: 'active',
       drag: {},
       calTotal: 'Total Calories: 0',
     }
   },
   computed: {
     filteredItems: function() {
       if (this.show === 'active')
        return this.items.filter(function(item) {
            return !item.hidden;
          });
       if (this.show === 'hidden')
          return this.items.filter(function(item) {
	          return item.hidden;
	        });
       return this.items;
     },
   },
   methods: {
     sort: function() {
       this.items.sort();
     },
     addItem: function() {
       this.items.push({text: this.message + ", " + this.calCount + " calories",hidden:false});
       this.calories.push(this.calCount);
       var total = 0;
       for (var i = 0; i < this.calories.length; ++i) {
         total += Number(this.calories[i]);
       }
       this.calTotal = "Total Calories: " + total;
       console.log(this.calTotal);
       this.calCount = '';
       this.message = '';
     },
     hideItem: function(item) {
       item.hidden = !item.hidden;
     },
     deleteItem: function(item) {
       var index = this.items.indexOf(item);
       console.log(index);
       if (index > -1) {
         console.log(index);
	       this.items.splice(index,1);
         this.calories.splice(index,1);
       }
       var total = 0;
       for (var i = 0; i < this.calories.length; ++i) {
         total += Number(this.calories[i]);
       }
       this.calTotal = "Total Calories: " + total;
     },
     showAll: function() {
       this.show = 'all';
     },
     showActive: function() {
       this.show = 'active';
     },
     showHidden: function() {
       this.show = 'hidden';
     },
     deleteHidden: function() {
       this.items = this.items.filter(function(item) {
         return !item.hidden;
       });
     },
     dragItem: function(item,event) {
       this.drag = item;
       event.dataTransfer.setData('text', '');
     },
     dropItem: function(item) {
       var indexItem = this.items.indexOf(this.drag);
       var indexTarget = this.items.indexOf(item);
       this.items.splice(indexItem,1);
       this.items.splice(indexTarget,0,this.drag);
     },
     deleteAll: function() {
       this.items = this.items.filter(function(item) {
         return null;
       });
       this.calories = this.calories.filter(function(item) {
         return null;
       });
       this.calTotal = "Total Calories: 0";
     },
   }
 }
</script>

<style scoped>
.container {
    width: 75%;
    margin-left: 12.5%;
    display: grid;
    grid-template-areas: 
        "count query";
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
}

.counter {
    grid-area: count;
    background-color: white;
    height: 100%;
}

.search {
    grid-area: query;
    background-color: grey;
}


 ul {
     list-style: none;
 }

 li {
     background: #f3f3f3;
     width: 500px;
     min-height: 30px;
     padding: 10px;
     margin-bottom: 10px;
     font-size: 1em;
     display: flex;
     align-items: center;
 }

 .delete {
     display: none;
     margin-left: auto;
 }

 li:hover .delete {
     display: block;
 }

 label {
     width: 400px;
 }

 .hidden {
     //text-decoration: line-through;
 }

 /* Form */

 input[type=checkbox] {
     transform: scale(1.5);
     margin-right: 10px;
 }

 input[type=text] {
     font-size: 1em;
 }

 button {
     font-family: 'Arvo';
     font-size: 1em;
 }
 .controls {
     margin-top: 20px;
 }

  .footer {
     margin-top: 250px;
     height: 100px;
     text-align: center;
 }

 .footer a {
     text-decoration: none;
     font-size: xx-large;
     font-family: "Arial";
     color: black;
 }
</style>
