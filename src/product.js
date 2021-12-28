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
			<div id="section2">
				<Title title="product information"/>
				<div id="inner2">
				<p>Avg Customer Rating As our friends and families hover in the kitchen let's remember they are hungering for more than physical food. I believe the light in a home shines brightest in the kitchen, Let Your Light Shine!<br/>
- Mary Jo Montanye, Grandma's Simple Cookbook<br/>
Presenting our new pair of serving trays with a unique color palette, that looks pretty in<br/>
All online payment methods are accepted.</p>	
				<table>
					<tr>
						<th>features</th>
						<th>description</th>
					</tr>
					<tr>
						<td>features</td>
						<td>description</td>
					</tr>
					<tr>
						<td>features</td>
						<td>description</td>
					</tr>
					<tr>
						<td>features</td>
						<td>description</td>
					</tr>										
				</table>
				</div>
			</div>
			<div id="section3">
				<Title title="reviews"/>
				<div id="inner3">
					<div id="review_photos">
						<img src="images/bike.png"/>
						<img src="images/bike.png"/>
						<img src="images/bike.png"/>
						<img src="images/bike.png"/>					
						<img src="images/bike.png"/>
						<img src="images/bike.png"/>						
					</div>
					<div id="reviews">
						<div id="review_desc">
							<div id="top">
								<img src="images/bike.png"/>
								<div id="details">
									<p>profile name</p>
									<p>customer</p>
								</div>
							</div>
							<div id="bottom">
								<p>
								I’ve been using this electric scooter for the past 2 years and it is very helpful. I take it wout when I have to go out for a market. It helps  me connect to the nature.  ALong with this a helmet would be great. 
								</p>
							</div>
						</div>
						<div id="review_desc">
							<div id="top">
								<img src="images/bike.png"/>
								<div id="details">
									<p>profile name</p>
									<p>customer</p>
								</div>
							</div>
							<div id="bottom">
								<p>
								I’ve been using this electric scooter for the past 2 years and it is very helpful. I take it wout when I have to go out for a market. It helps  me connect to the nature.  ALong with this a helmet would be great. 
								</p>
							</div>
						</div>
						<div id="review_desc">
							<div id="top">
								<img src="images/bike.png"/>
								<div id="details">
									<p>profile name</p>
									<p>customer</p>
								</div>
							</div>
							<div id="bottom">
								<p>
								I’ve been using this electric scooter for the past 2 years and it is very helpful. I take it wout when I have to go out for a market. It helps  me connect to the nature.  ALong with this a helmet would be great. 
								</p>
							</div>
						</div>											
					</div>
				</div>
			</div>
			<div id="section4">
				<Title title="similar models"/>
				<Model items={res}/>
			</div>
		</div>
	);
}
