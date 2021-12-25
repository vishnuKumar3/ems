import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import "./styles/index.css";
import "./styles/home.css";
import "./styles/global.css";
import "./styles/models.css";
import Home from "./home.js";
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
						<p>Elect My Scooter</p>
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
						<a href="#">Store</a>
						<a href="#">Favourites</a>
						<a href="#">Cart</a>
						<a href="#">Compare</a>
						<a href="#">About Us</a>
						<a href="#">Contact Us</a>
					</div>
				</div>
			</div>
			<Routes>
				<Route path="/" element={<Home/>}/>
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
