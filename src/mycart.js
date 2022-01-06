import "./styles/mycart.css";
import Title from "./components/heading.js";
import Footer from "./footer.js";
import PaidAlert from "./paid_alert.js";

var list=["products_head","payment"];
var cards=["credit","debit","net","delivery"]
const profile_modify=(id_num)=>{
	var i;
	for(i of list){
		if(i==id_num){
				i=="products_head"?
				document.getElementById("show").style.display="flex"
				:document.getElementById("show").style.display="none";
			document.getElementById(i).style.display="flex";
			}
		else
			document.getElementById(i).style.display="none";			
		}
	
}

const card=(mode)=>{
	var i;
	for(i of cards){
		if(i==mode)
			document.getElementById(i).style.display="flex";
		else
			document.getElementById(i).style.display="none";		
	}
}

var res={	
	1:{
	"img":"images/bike.png",
	"price":"3000",
	"order_date":"12/10/2021"
	},
	2:{
	"img":"images/bike1.png",
	"price":"3000",
	"order_date":"13/10/2021"
	},
	3:{
	"img":"images/bike2.png",
	"price":"5000",
	"order_date":"15/10/2021"
	}			
};

const total_bill=()=>{
	var sum=0;
	Object.entries(res).map(([key,value],index)=>{
		sum+=parseInt(value["price"]);
	})
	return sum;
}

const payment=()=>{
	// IF PAYMENT SUCCESSFUL
	var ele=document.getElementById("paid");
	ele.style.display="flex";	
	ele.style.animation="alertZoom 0.5s linear";
}


export default function MyCart(){
	return(
		<div id="mycart">
			<Title title="my cart"/>
			<PaidAlert/>			
			<div id="top">
				<div id="left">
					<img src="images/tony.jpeg"/>
					<p>tony</p>					
					<p>tony@gmail.com</p>
					<p>+91-8956047560</p>
				</div>
				<div id="right">
					<div id="nav">
						<button onClick={()=>{profile_modify("products_head")}}>products selected</button>
						<button onClick={()=>{profile_modify("payment")}}>payment</button>
					</div>
					<div id="body">
						<div id="products_head">
							<div id="products">
								{Object.entries(res).map(([key,value],index)=>{
									return(
									<div id="vehicle">
										<img src={value["img"]}/>
										<p>Model number</p>
										<p>${value["price"]}</p>
										<p>order date:{value["order_date"]}</p>
										<a href="#">write a review</a>
									</div>)
									})
								}								
							</div>
							<center>
								<button>checkout at ${total_bill()}</button>
							</center>
						</div>							
						<div id="payment">
							<div id="inner-box">
								<div id="left-nav">
									<button onClick={()=>{card("credit")}}>credit card ></button>
									<button onClick={()=>{card("debit")}}>debit card ></button>
									<button onClick={()=>{card("net")}}>net banking ></button>
									<button onClick={()=>{card("delivery")}}>cash on delivery ></button>
								</div>
								<div id="box">
									<div id="credit">
										<p>card info</p>
										<input placeholder="card number" type="number"/>
										<div>
											<input placeholder="expiry month" type="number"/>
											<input placeholder="expiry year" type="number"/>
										</div>
										<input placeholder="cvv" type="number"/>
										<input placeholder="name on the card" type="text"/>
										<div>
											<input type="checkbox"/>
											<p>SAVE the bank details for faster payments ahead</p>
										</div>
										<button onClick={payment}>pay $2345</button>
									</div>
									<div id="debit">
										debit
									</div>
									<div id="net">
										net
									</div>
									<div id="delivery">
										delivery
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="show">
				<div>
				</div>
				<p>you will recieve these products within 10-15 days</p>
			</div>	
			<Footer/>		
		</div>
	);
}
