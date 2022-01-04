import Title from "./components/heading.js";
import Model from "./components/models.js";
import Footer from "./footer.js";
import "./styles/all_products.css";
import {useEffect} from "react";

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


const Products=async ()=>{
	await fetch(
	"http://localhost:5000/storefront/get",
	{method:"post",
	headers:
		{"Content-Type":"application/json"},
		body:JSON.stringify({
			    "selectArray": ["Products"]
			})
}).then((res)=>{console.log(res);return res.json()}).then((res)=>{console.log(res)})	
}

export default function Store(){
	useEffect(()=>{
		Products();	
	},[])
	return(
		<div id="all_products">
			<Title title="all products"/>
			<Model items={res}/>
			<Footer/>
		</div>
	);
}
