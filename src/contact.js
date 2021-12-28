import "./styles/contact.css";
import Title from "./components/heading.js";
import {useState,useEffect} from 'react';

var source=[
"images/back1.jpeg",
"images/back2.jpeg",
"images/back3.jpeg",
"images/back4.jpeg"
]
export default function Contact(){
	var [var_i,change_i]=useState(0);
	/*window.setInterval(function(){
		change_i(var_i+1);
				var ele=document.querySelector("#contact #top");
		ele.style.backgroundImage=source[var_i];
	},3000);*/
	
	
	return(
		<div id="contact">
			<Title title="contact us"/>
			<div id="top">
				
			</div>
		</div>
	);
}
