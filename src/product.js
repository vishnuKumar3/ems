import Title from "./components/heading.js";
import Model from "./components/models.js";
import Specs from "./components/specs.js";
import "./styles/product.css";

var specs={
	1:{
		"title":"5 hours",
		"sub":"charge time"
	},
	2:{
		"title":"150kg",
		"sub":"max load"	
	},
	3:{
		"title":"50 km",
		"sub":"per charge"	
	},
	4:{
		"title":"1000w",
		"sub":"motor"	
	}
	
};

var rating=3;
var array=[1,2,3,4,5];

const quantity=(event,check)=>{
	var ele=event.target;
	if(check=="sub"){
		var num=parseInt(ele.nextSibling.innerHTML);
		if(num>0)
			ele.nextSibling.innerHTML=num-1;
	}

	else if(check=="add"){
		var num=parseInt(ele.previousSibling.innerHTML);
		ele.previousSibling.innerHTML=num+1;
	}
}

export default function Product(){
	return(
		<div id="product">
			<div id="section1">
				<Title title="product"/>
				<div id="inner-box">
					<img src="images/bike.png" alt="bike"/>
					<div id="right">
						<p id="title">gs-4321<span>(25% off)</span></p>
						<p>product specifications</p>
						<Specs details={specs}/>
						<div id="rating">
							<p>avg customer rating</p>
							(<a href="#">write a review</a>)
						</div>
						<div id="rating_star">
							{
							array.map((key)=>{
								if(key<=rating)
									return <img alt="gold_star" src="images/star_gold.png"/>
								else
									return <img alt="light_star" src="images/star_light.png"/>
								})
							}
							<p>(230 reviews)</p>
						</div>
						<div id="quantity">
							<p>qty:</p>
							<img alt="subtract" onClick={(event)=>{quantity(event,"sub")}} src="images/subtract.png"/>
							<p>1</p>
							<img alt="add" onClick={(event)=>{quantity(event,"add")}} src="images/add.png"/>
						</div>
						<div id="price">
							<p>RS.30000/-</p>
							<p>Rs.40000/-</p>
						</div>
						<div id="buttons">
							<button>Add to cart</button>
							<button>+ compare</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
