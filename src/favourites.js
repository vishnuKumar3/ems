import Model from "./components/models.js";
import Title from "./components/heading.js";
import "./styles/favourites.css";

var res={
	1:{
		"img":"images/bike.png",
		"model":"gs-4322"
		},
	2:{
		"img":"images/bike1.png",
		"model":"gs-4323"
		},
	3:{
		"img":"images/bike2.png",
		"model":"gs-4324"
		},
	4:{
		"img":"images/bike3.png",
		"model":"gs-4325"
		},
	5:{
		"img":"images/bike3.png",
		"model":"gs-4325"
		}						
};

export default function Favourites(){
	return(
		<div id="favourites">
			<Title title="favourites"/>
			<Model items={res}/>
			<div id="bottom">
				<p>START INVESTING FOR BETTER TOMORROW</p>
				<p>Avg Customer Rating As our friends and families hover in the kitchen let's remember they are hungering for more than physical food. I believe the light in a home shines brightest in the kitchen, Let Your Light Shine!
- Mary Jo Montanye, Grandma's Simple Cookbook
				</p>
			</div>
			<center>
				<button>enter store</button>
			</center>			
		</div>
	);
}
