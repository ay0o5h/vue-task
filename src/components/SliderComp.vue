
<template>

  <section>
    <div class="container">
        <div class="carousel">
            <input v-for="user in users" :key="user.id" type="radio" name="slides" checked="checked" :id="user.id">
            
            <ul class="carousel__slides">
                <li v-for="user in users" :key="user.id" class="carousel__slide">
                    <figure>
                        <div>
                            <img :src="user.photoUrl" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">{{user.title}}</span>
                        </figcaption>
                    </figure>
                </li>
               
            </ul>    
            <ul class="carousel__thumbnails">
                <li  v-for="user in users" :key="user.id">
                    <label :for="user.id"><img :src="user.photoUrl" alt=""></label>
                </li>
            </ul>
        </div>
    </div>
</section>
<div>
<!-- <div class="container">
  <ul class="slides" v-for="user in users" :key="user.id">
    <li :id="user.id"><img :src="user.photoUrl" alt="" /></li>
  </ul>

  <ul  v-for="user in users" :key="user.id" class="thumbnails">
    <li>
      <a :href="user.id"><img :src="user.photoUrl" /></a>
    </li>
    <li>
      <a href="#slide2"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" /></a>
    </li>
    <li>
      <a href="#slide3"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" /></a>
    </li>
    <li>
      <a href="#slide4"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" /></a>
    </li>
    <li>
      <a href="#slide5"><img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" /></a>
    </li>
  </ul>
</div> -->
		<ul>
			<li v-for="user in users" :key="user.id">{{ user.id }}. {{ user.title }} </li>
		</ul>
	</div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
//   import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//   // optional style for arrows & dots
//   import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import Vue from 'vue';
// new Vue({
//   el: '#list',
//   data: function() {
// return {
//     arrList: [{
//       title: 'List',
//       icon: 'fa fa-list fa-2x',
//     },
//     {
//       title: 'List1',
//       icon: 'fa fa-list fa-2x',
//     }
//     ]
//   };
// }
// })
import axios from 'axios'
 
	export default {
		name: 'SliderComp',
		// components: { VueSlickCarousel },
		// components: { VueSlickCarousel },
		
		data: () => ({
			users: [],
 
		}),
		mounted() {
			this.c1 = this.$refs.c1;
    this.c2 = this.$refs.c2;
			axios.get('https://cinema-api.shoofnetwork.net/api/Mobile/Sections/GetSections?pageNumber=1&showsPerSection=5&target=1').then((res) => {
				// this.users = res.data.sections[0].details.shows
				this.users = res.data.data.sections[5].details.shows

				console.log(this.users)
			})
		}
	}

</script>
<style scoped>

 .container {
 max-width: 1044px;
 margin: 0 auto;
 padding: 0 20px;
}
 .carousel {
 display: block;
	text-align: left;
 position: relative;
 margin-bottom: 22px;
}
 .carousel > input {
clip: rect(1px, 1px, 1px, 1px);
clip-path: inset(50%);
height: 1px;
width: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
 }
 .carousel > input:nth-of-type(6):checked ~ .carousel__slides .carousel__slide:first-of-type {
 margin-left: -500%;
}
 .carousel > input:nth-of-type(5):checked ~ .carousel__slides .carousel__slide:first-of-type {
 margin-left: -400%;
}
 .carousel > input:nth-of-type(4):checked ~ .carousel__slides .carousel__slide:first-of-type {
 margin-left: -300%;
}
 .carousel > input:nth-of-type(3):checked ~ .carousel__slides .carousel__slide:first-of-type {
 margin-left: -200%;
}
 .carousel > input:nth-of-type(2):checked ~ .carousel__slides .carousel__slide:first-of-type {
	margin-left: -100%;
}
 .carousel > input:nth-of-type(1):checked ~ .carousel__slides .carousel__slide:first-of-type {
	margin-left: 0%;
}
 .carousel > input:nth-of-type(1):checked ~ .carousel__thumbnails li:nth-of-type(1) {
 box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
}
 .carousel > input:nth-of-type(2):checked ~ .carousel__thumbnails li:nth-of-type(2) {
 box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
}
 .carousel > input:nth-of-type(3):checked ~ .carousel__thumbnails li:nth-of-type(3) {
 box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
}
 .carousel > input:nth-of-type(4):checked ~ .carousel__thumbnails li:nth-of-type(4) {
 box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
}
 .carousel > input:nth-of-type(5):checked ~ .carousel__thumbnails li:nth-of-type(5) {
	box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
}
 .carousel > input:nth-of-type(6):checked ~ .carousel__thumbnails li:nth-of-type(6) {
	box-shadow: 0px 0px 0px 5px rgba(0, 0, 255, 0.5);
}
 .carousel__slides {
	position: relative;
	z-index: 1;
	padding: 0;
	margin: 0;
	overflow: hidden;
	white-space: nowrap;
	box-sizing: border-box;
	display: flex;
 }
 .carousel__slide {
position: relative;
display: block;
flex: 1 0 100%;
width: 100%;
height: 100%;
overflow: hidden;
transition: all 300ms ease-out;
vertical-align: top;
box-sizing: border-box;
white-space: normal;
}
 .carousel__slide figure {
 display: flex;
 margin: 0;
 }
 .carousel__slide div {
 position: relative;
 width: 100%;
}
 .carousel__slide div:before {
display: block;
content: "";
width: 100%;
padding-top: 66.6666666667%;
}
 .carousel__slide div > img {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
}
 .carousel__slide img {
display: block;
flex: 1 1 auto;
object-fit: cover;
}
 .carousel__slide figcaption {
 align-self: flex-end;
	padding: 20px 20px 0 20px;
	flex: 0 0 auto;
 width: 25%;
 min-width: 150px;
}
 .carousel__slide .credit {
 margin-top: 1rem;
	color: rgba(0, 0, 0, 0.5);
	display: block;
}
 .carousel__slide.scrollable {
	overflow-y: scroll;
}
 .carousel__thumbnails {
 list-style: none;
 padding: 0;
	margin: 0;
 display: flex;
 margin: 0 -10px;
}
 .carousel__slides + .carousel__thumbnails {
	margin-top: 20px;
}
 .carousel__thumbnails li {
	flex: 1 1 auto;
	max-width: calc((100% / 6) - 20px);
	margin: 0 10px;
	transition: all 300ms ease-in-out;
}
 .carousel__thumbnails label {
 display: block;
	position: relative;
}
 .carousel__thumbnails label:before {
	display: block;
	content: "";
	width: 100%;
	padding-top: 100%;
}
 .carousel__thumbnails label > img {
 position: absolute;
	top: 0;
	left: 0;
 right: 0;
 bottom: 0;
	width: 100%;
 height: 100%;
}
 .carousel__thumbnails label:hover, .carousel__thumbnails label:focus {
	cursor: pointer;
}
 .carousel__thumbnails label:hover img, .carousel__thumbnails label:focus img {
 box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
	transition: all 300ms ease-in-out;
}
 .carousel__thumbnails img {
	display: block;
 width: 100%;
 height: 100%;
 object-fit: cover;
}
 


</style>