<template>
  <div>
    <h1>Health Profile</h1>
    <h2>{{ name }}</h2>
    <form v-on:submit.prevent="computeInfo">
      <p>Enter height (in inches) followed by weight (in pounds)</p>
      <input type="number" v-model="height">
      <input type="number" v-model="weight">
      <button type="submit">Add</button>
    </form>
    <img v-bind:src="imagePath"/>
    <h3>Weight: {{ weight }} lbs</h3>
    <h3>Height: {{ height }} in</h3>
    <h3>BMI: {{ BMI }}</h3>
    <h3>Your weight range is: {{ classification }}</h3>
    <h3> {{ message }} </h3>
    <div class="footer">
    <a href="github.com">My Github</a>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'Profile',
   data () {
     return {
       name: 'Human Body',
       imagePath: '/static/images/human-body.jpg',
       weight: 0,
       height: 0,
       BMI: 0,
       classification: '',
       message: '',
     }
   },
   methods: {
     computeInfo: function() {
       var weightKilo = this.weight * 0.453592;
       var heightMeters = this.height * 0.0254;
       this.BMI = weightKilo / (heightMeters * heightMeters);
       if (this.BMI < 18.5) {
         this.classification = "underweight.";
         this.message = "Uh oh, that's a little low. Try lifting weights. Eat a sandwich?";
       }
       else if (this.BMI < 25) {
        this.classification = "normal weight."
        this.message = "You're right where you want to be. Good job!";
       }
       else if (this.BMI < 30) {
         this.classification = "overweight.";
         this.message = "Your health is at risk. Try eating a little less.";
       }
       else {
         this.classification = "obese!";
         this.message = "Your health is in danger. Hit the treadmill! Eat less!";
       }
     }
   }
 }
</script>

<style scoped>
 img {
     max-width: 500px;
 }
  .footer {
     margin-top: 50px;
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

