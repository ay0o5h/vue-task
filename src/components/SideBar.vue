<template>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="area"></div><nav class="main-menu">
            <ul id="list">
                <li>
                    <a href="#">
                        <img src="../assets/images/logo.png" height="19.58" width="46.86" />
                      
                       
                    </a>
                    
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-magnifying-glass"></i>
                        <span class="nav-text">
                            Search
                        </span>
                    </a>
                    
                </li>
                  <li>
                    <a href="#">
                   <i class="fa fa-clapperboard"></i>
                        <span class="nav-text">
                            movies
                        </span>
                    </a>
                   
                </li>
               
                  <li >
                    <a href="#">
                 <i class="fa fa-tv"></i>
                        <span class="nav-text">
                            tv
                        </span>
                    </a>
                  
                </li>
               
               
                
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-heart fa-2x"></i>
                        <span class="nav-text">
                            Favorites
                        </span>
                    </a>
                   
                </li>

                 <li class="has-subnav">
                    <a href="#">
                       
                       <i class="fa fa-radio"></i>
                        <span class="nav-text">
                           Tv
                        </span>
                    </a>
                    
                </li>
                 <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-list "></i>
                        <span class="nav-text">
                        List
                        </span>
                    </a>
                    </li>
               
              
            </ul>

        </nav>
</template>

<script>
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
export default {
  name: 'SideBar',
}
</script>
<style scoped>
img {
    margin-left:25.04;
}
.fa-2x {
font-size: 15px;
}
.fa {
position: relative;
display: table-cell;
width: 60px;
height: 36px;
text-align: center;
vertical-align: middle;
font-size: 15px;

}


.main-menu:hover,nav.main-menu.expanded {
width:250px;
overflow:visible;
}

.main-menu {
position:absolute;
top:0;
bottom:0;
height:100%;
left:0;
width:96px;
overflow:hidden;
-webkit-transition:width .05s linear;
transition:width .05s linear;
-webkit-transform:translateZ(0) scale(1,1);
z-index:1000;
}

.main-menu>ul {
margin:7px 0;
}

.main-menu li {
position:relative;
display:block;
width:250px;
margin-top:70px ;
margin-left: 19.5px;
}
.main-menu li:first-child {
position:relative;
display:block;
width:250px;
margin-top:30px ;
margin-left: 25px;
}

.main-menu li>a {
position:relative;
display:table;
border-collapse:collapse;
border-spacing:0;
color:#999;
 font-family: arial;
font-size: 14px;
text-decoration:none;
-webkit-transform:translateZ(0) scale(1,1);
-webkit-transition:all .1s linear;
transition:all .1s linear;
  
}

.main-menu .nav-icon {
position:relative;
display:table-cell;
width:60px;
height:36px;
text-align:center;
vertical-align:middle;
font-size:18px;
}

.main-menu .nav-text {
position:relative;
display:table-cell;
vertical-align:middle;
width:190px;
  font-family: 'Titillium Web', sans-serif;
}

.main-menu>ul.List {
position:absolute;
left:0;
bottom:0;
}

.no-touch .scrollable.hover {
overflow-y:hidden;
}

.no-touch .scrollable.hover:hover {
overflow-y:auto;
overflow:visible;
}

a:hover,a:focus {
text-decoration:none;
}

nav {
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
-o-user-select:none;
user-select:none;
}

nav ul,nav li {
outline:0;
margin:0;
padding:0;
}
.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
color:#fff;
background-color:#5fa2db;
}
.area {
float: left;
background: #e2e2e2;
width: 100%;
height: 100%;
}


</style>