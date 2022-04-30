
<template>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="container">
<div v-for="movie in movies" :key="movie.id" v-bind:class="activeSlider ===movie.id ? showSlide :hideSlide">
 <div class="info">
 <a-rate value="3" />
 <h3>{{movie.title}}</h3>
   <star-rating :rating="movie.rate"
   inactive-color="#ccc"
             active-color="#f00"
 v-bind:star-size="20"
    :read-only="true" ></star-rating>
 <p>{{movie.description}}</p>
<span><i class="fa-regular fa-clock"></i> {{movie.views}}</span>
<span><i class="fa-solid fa-clock-rotate-left"></i> {{movie.year}}</span>
 </div>
 <img :src="movie.photoUrl" alt="" >

 </div>
 <div class="popular">popular movies</div>
 <div class="container-image">
 <img @click="changeSlide(movie.id)" v-for="movie in movies" v-bind:class="activeSlider ===movie.id && activeClass" :key="movie.id" :src="movie.photoUrl" alt="" >

	</div>
 
</div>
	
</template>
<script>

import axios from 'axios'
import StarRating from 'vue-star-rating';
  
  export default {
		
	name: 'SliderComp',
	components: {
  
    StarRating
  },


		data: () => ({
			movies: [],
			activeSlider:"",
			activeClass: 'active',
			showSlide:"showSlide content",
			hideSlide:"hideSlide content",


 
		}),
		mounted() {
		
			axios.get('https://cinema-api.shoofnetwork.net/api/Mobile/Sections/GetSections?pageNumber=1&showsPerSection=5&target=1').then((res) => {
				this.movies = res.data.data.sections[5].details.shows
this.activeSlider=res.data.data.sections[5].details.shows[0].id
				console.log(this.movies)
			})
		},
		methods: {
  changeSlide: function (value) {
    // now we have access to the native event
    this.activeSlider=value;
    
  }
}
	}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Proxima+Nova');

 
.content {
	display:flex;
	flex-direction: row;
	
}
.content img {
	flex: 50%;
	height: 300px;
	margin-top: 2%;
}
.content div {
	flex: 50%;
}
 .container {
 max-width: 1200px;
 margin: 0 auto;
 overflow: hidden;


}
.info {
	height:320px;
	margin-top: 5%;
	border-left: 4px solid rgba(214, 4, 4, 1);
	font-family: 'proxima-nova', sans-serif;
	text-align: left;
	padding: 0 20px;
}
.info h3 {
	font-size:48px;
	color:rgba(255, 255, 255, 1);
	font-weight:700;
	
	line-height: 48px;

}
.info p{
	font-size:18px;
	color:rgba(255, 255, 255, 0.8);
	font-weight: 400;
	line-height: 27px;
	margin-top:24px;
	height:110px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.info span {
	margin-right:25.67px;
}
.info span i {
	color:rgba(255, 255, 255, 0.8);
    height:7.08px;
	width: 2.5px;
	margin-top:5.42px;
	margin-right:15px;
}
.popular {
	font-size:18px;
	color:rgba(255, 255, 255, 1);
	font-weight: 300;
	line-height: 18px;
	margin-top:104px;
	font-family: 'proxima-nova', sans-serif;
	text-align: left;
	border-left: 4px solid rgba(214, 4, 4, 1);
  height:47.86px;
  padding-left: 24px;
  padding-top: 15px;

}
.container-image {
	display: flex;
	flex-direction: row;
	overflow: auto; 
	margin-top: 24px;
	
}
.container-image img {
	width: 250px;
	height:140.63px;
	cursor: pointer;
}
.showSlide {
	display:flex;
}
.hideSlide {
	display:none;
}
.active {
	border: 3px solid rgba(214, 4, 4, 1);

}
@media (max-width: 800px) {
  .content {
    flex-direction: column;
  }
  .info h3 {
 font-size:30px;
  }
   .info p {
 font-size:15px;
  }
  .content img {
	height: 200px;
  }
}
</style>