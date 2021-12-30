import "./styles/contact.css";
import Title from "./components/heading.js";
import {useState,useEffect} from 'react';

var source=[
"url('images/back1.jpeg')",
"url('images/back2.jpeg')",
"url('images/back3.jpeg')",
"url('images/back4.jpeg')"
]

const expand=(event)=>{
	var ele=event.target.parentNode.nextSibling;
	if(ele.style.animationName!="expand_query"){
		ele.style.animation="expand_query 0.5s linear both";
		}
	else{
		ele.style.animation="diminish_query 0.5s linear both";		
		
		}
}

export default function Contact(){
	var [var_i,change_i]=useState(0);
	
	useEffect(()=>{
	window.setInterval(function(){
		var_i=(++var_i)%4;
		change_i(var_i);
		var ele=document.querySelector("#contact #top");
		ele.style.animationName=="image_anim" || ele.style.animationName==""?ele.style.animation="image_anim1 1s linear":ele.style.animation="image_anim 1s linear";		
		ele.style.backgroundImage=source[var_i];				
	},3000);

	},[]);
	
	
	return(
		<div id="contact">
			<Title title="contact us"/>
			<div id="top">
				
			</div>
			<div id="top_details">
				<div id="details">
					<p>phone details</p>
					<p>+91-5790089670</p>
				</div>
				<div id="details">
					<p>email address</p>
					<p>electmyscooter@gmail.com</p>
				</div>
				<div id="details">
					<p>office address</p>
					<p>line1</p>
					<p>line2</p>
					<p>line3</p>
				</div>
				<div id="details">
					<p>gst number || important number</p>
					<p>gst number 1</p>
				</div>												
			</div>
			<div id="bottom">
				<div id="facts">
					<Title title="faq"/>
					<div id="facts-inner">
						<div id="question">
							<p>what is the guarantee that i will recieve the right product?</p>
							<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
						</div>
						<div id="answer">
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
						</div>
						<div id="question">
							<p>what is the guarantee that i will recieve the right product?</p>
							<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
						</div>
						<div id="answer">
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
						</div>
						<div id="question">
							<p>what is the guarantee that i will recieve the right product?</p>
							<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
						</div>
						<div id="answer">
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
						</div>
						<div id="question">
							<p>what is the guarantee that i will recieve the right product?</p>
							<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
						</div>
						<div id="answer">
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
						</div>						
						<div id="question">
							<p>what is the guarantee that i will recieve the right product?</p>
							<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
						</div>
						<div id="answer">
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
						</div>																					
					</div>
				</div>				
			</div>
			<center>
				<button>enter store</button>
			</center>
		</div>
	);
}
