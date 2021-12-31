import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./styles/index.css";
import Authenticate from "./authenticate.js";
import Home from "./home.js";
import Product from "./product.js";
import Store from "./store.js";
import Contact from "./contact.js";
import Favourites from "./favourites.js";
import Profile from "./profile.js";
import About from "./about.js";
import AllProducts from "./all_products.js";
import Comparison from "./comparison.js";
import MyCart from "./mycart.js";
import Footer from "./footer.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const SocialMedia=(event)=>{
	var ele=event.target.nextSibling;
	if(event.target.parentNode.id=="left"){
		if(ele.style.animationName!="expand")
			ele.style.animation="expand 1s linear both";
		else
			ele.style.animation="diminish 1s linear both";}
	else{
		if(ele.style.animationName!="expand_right")
			ele.style.animation="expand_right 1s linear both";
		else
			ele.style.animation="diminish_right 1s linear both";}			
			
}

function Index(){
	return(
		<BrowserRouter>
			<div id="navbar">
				<div id="left">
					<img onClick={(event)=>SocialMedia(event)} src="images/arrow.png"/>
					<div id="drop-dwn">
						<a href="#">Facebook</a>
						<a href="#">Instagram</a>
						<a href="#">Twitter</a>
						<a href="#">LinkedIn</a>
					</div>
					<div id="logo">
						<img src="/images/arrow_black.png"/>
						<a href="/">Elect My Scooter</a>
					</div>
				</div>
				<div id="center">
					<div>
					<input placeholder="search by model name" type="text"/>
					<select>
						<option>one</option>
						<option>one</option>
						<option>one</option>
						<option>one</option>
					</select>
					</div>
				</div>
				<div id="right">
					<img onClick={(event)=>SocialMedia(event)} src="images/arrow.png"/>
					<div id="drop-dwn">
						<a href="/store">Store</a>
						<a href="/favourites">Favourites</a>
						<a href="/mycart">Cart</a>
						<a href="/comparison">Compare</a>
						<a href="/about">About Us</a>
						<a href="/contact">Contact Us</a>
						<a href="/authenticate">Authenticate</a>						
					</div>
				</div>
			</div>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/product" element={<Product/>}/>
				<Route path="/store" element={<Store/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/favourites" element={<Favourites/>}/>
				<Route path="/profile" element={<Profile/>}/>				
				<Route path="/about" element={<About/>}/>								
				<Route path="/allProducts" element={<AllProducts/>}/>
				<Route path="/comparison" element={<Comparison/>}/>				
				<Route path="/mycart" element={<MyCart/>}/>				
				<Route path="/authenticate" element={<Authenticate/>}/>						
				<Route path="/footer" element={<Footer/>}/>
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
