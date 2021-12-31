import "./styles/comparison.css";
import Title from "./components/heading.js";
import Footer from "./footer.js";


var res={
	"bike":{
		"height":"2m",
		"weight":"6kg",
		"battery life":"60 hours",
		"price":"rs 60000"
	},
	"bike1":{
		"height":"3m",
		"weight":"7kg",
		"battery life":"70 hours",
		"price":"rs 70000"
	},
	"bike2":{
		"height":"5m",
		"weight":"9kg",
		"battery life":"90 hours",
		"price":"rs 90000"
	},
	"bike3":{
		"height":"4m",
		"weight":"8kg",
		"battery life":"80 hours",
		"price":"rs 80000"
	}			
}

const vehicle=(event,align)=>{
	var ele=event.target;
	var name=ele.value.split("/")[1].split(".")[0];
	ele.nextSibling.src=ele.value;
	var v=document.querySelectorAll(`#compare p:nth-child(${align})`);
	var i;
	v[0].innerHTML=res[name]["height"];
	v[1].innerHTML=res[name]["weight"];
	v[2].innerHTML=res[name]["battery life"];
	v[3].innerHTML=res[name]["price"];			
	
}

export default function Comparison(){
	return(
		<div id="comparison">
			<Title title="comparison"/>
			<div id="section1">
				<div id="v1">
					<select onChange={(event)=>{vehicle(event,1)}}>
						<option hidden>select model</option>
						<option value="images/bike.png">bike</option>
						<option value="images/bike1.png">bike1</option>
						<option value="images/bike2.png">bike2</option>
						<option value="images/bike3.png">bike3</option>						
					</select>
					<img id="bike" src="images/bike.png"/>
					<a href="/product">view details</a>
					<button><div>
						<p>add to cart</p>
						<img src="images/cart.png"/>
						</div>
					</button>					
				</div>
				<div id="details">
					<div id="compare_details">
						<p id="title">height</p>
						<div id="compare">
							<p>2 m</p>
							<p>2 m</p>
						</div>
					</div>
					<div id="compare_details">
						<p id="title">weight</p>
						<div id="compare">
							<p>6 kg</p>
							<p>6 kg</p>
						</div>
					</div>
					<div id="compare_details">
						<p id="title">battery life</p>
						<div id="compare">
							<p>60 hours</p>
							<p>60 hours</p>
						</div>
					</div>
					<div id="compare_details">
						<p id="title">price</p>
						<div id="compare">
							<p>rs 60000</p>
							<p>rs 60000</p>
						</div>
					</div>					
															
				</div>
				<div id="v2">
					<select onChange={(event)=>{vehicle(event,2)}}>
						<option hidden>select model</option>					
						<option value="images/bike.png">bike</option>
						<option value="images/bike1.png">bike1</option>
						<option value="images/bike2.png">bike2</option>
						<option value="images/bike3.png">bike3</option>						
					</select>
					<img id="bike" src="images/bike.png"/>				
					<a href="/product">view details</a>	
					<button><div>
						<p>add to cart</p>
						<img src="images/cart.png"/>
						</div>
					</button>									
				</div>
			</div>
			<div id="section2">
				<center>
					<button>enter store</button>				
				</center>
			</div>
			<Footer/>
		</div>
	);
}
