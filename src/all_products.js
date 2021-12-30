import Title from "./components/heading.js";
import Model from "./components/models.js";
import "./styles/all_products.css";

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
		},
	6:{
		"img":"images/bike.png",
		"model":"gs-4322"
		},
	7:{
		"img":"images/bike1.png",
		"model":"gs-4323"
		},
	8:{
		"img":"images/bike2.png",
		"model":"gs-4324"
		},
	9:{
		"img":"images/bike3.png",
		"model":"gs-4325"
		},
	10:{
		"img":"images/bike3.png",
		"model":"gs-4325"
		}								
};

export default function store(){
	return(
		<div id="all_products">
			<Title title="all products"/>
			<Model items={res}/>
		</div>
	);
}
