<template>
    <div class="hero">
	<h1>Improve Your Health</h1>
    <h2>Check out our fitness menu for great tips and tricks!</h2>
    <br>
	<img v-bind:src="imagePath"/>
    <div class="footer">
    <a href="github.com">My Github</a>
    </div>
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
	     imagePath: '/static/images/runners.jpg'
	 }
     }
 }
</script>

<style scoped>
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
 }
 h1 {
     font-size: 2.5em;
     letter-spacing: .2rem;
     color: black;
     font-weight: bold;
     margin-bottom: 2px;
 }
 img {
     width: 100%;
 }

 .footer {
     margin-top: 50px;
     height: 100px;
 }

 .footer a {
     text-decoration: none;
     font-size: xx-large;
     font-family: "Arial";
     color: black;
 }
</style>
