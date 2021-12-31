import "./styles/about.css";
import Title from "./components/heading.js";
import Footer from "./footer.js";
import {useEffect} from "react";

export default function About(){
	useEffect(()=>{
		document.querySelector("#about #section2 video").addEventListener("mousedown",function(){
				if(this.webkitRequestFullScreen)
					this.webkitRequestFullScreen();
				else if(this.requestFullScreen)
					this.requestFullScreen();
				else					
				this.msRequestFullScreen();	
			});
	})
	return(
		<div id="about">
			<Title title="about us"/>
			<div id="section1">
				<div id="left">
					<div id="top">
						<div id="circle">
							<p>what</p>
							<p>we do</p>
						</div>
						<div id="desc">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nam id volutpat vitae velit. Risus hendrerit urna ac lorem volutpat nibh dictum diam vel. Aliquet cras ultrices quisque risus. Sit sit tellus augue laoreet adipiscing mattis porta amet. Nunc lectus a, quis mauris cursus. Morbi semper hac sit tincidunt lorem purus tempor. 							
						</div>
					</div>
					<div id="top">
						<div id="circle">
							<p>what</p>
							<p>we do</p>
						</div>
						<div id="desc">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nam id volutpat vitae velit. Risus hendrerit urna ac lorem volutpat nibh dictum diam vel. Aliquet cras ultrices quisque risus. Sit sit tellus augue laoreet adipiscing mattis porta amet. Nunc lectus a, quis mauris cursus. Morbi semper hac sit tincidunt lorem purus tempor. 							
						</div>					
					</div>
				</div>
				<div id="right">
					<video controls poster="images/scooter3.png">
						<source src="ride.mp4"/>
					</video>
				</div>
			</div>	
			<div id="section2">
				<Title title='elect "your" scooter'/>
				<video controls poster="images/scooter4.png">
					<source src="ride.mp4"/>
				</video>
			</div>
			<center>
				<button>enter store</button>
			</center>
			<Footer/>				
		</div>
	);
}
