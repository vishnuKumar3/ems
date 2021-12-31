import "./styles/profile.css";
import Title from "./components/heading.js";
import Footer from "./footer.js";

var list=["account","myorders","subscribe"];
const profile_modify=(id_num)=>{
	var i;
	for(i of list){
		if(i==id_num)
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

export default function Profile(){
	return(
		<div id="profile">
			<Title title="my profile"/>
			<div id="top">
				<div id="left">
					<img src="images/tony.jpeg"/>
					<p>tony</p>					
					<p>tony@gmail.com</p>
					<p>+91-8956047560</p>
				</div>
				<div id="right">
					<div id="nav">
						<button onClick={()=>{profile_modify("account")}}>account settings</button>
						<button onClick={()=>{profile_modify("myorders")}}>my orders</button>
						<button onClick={()=>{profile_modify("subscribe")}}>subscribe for updates</button>
					</div>
					<div id="body">
						<div id="account">
							<div id="detail">
								<p>name:</p>
								<p>tony stark</p>
							</div>
							<div id="detail">
								<p>email address:</p>
								<p>tony@starkindustries.com</p>
							</div>
							<div id="detail">
								<p>phone number:</p>
								<p>+91-8904567908</p>
							</div>
							<div id="detail">
								<p>alternate phone number:</p>
								<p>+91-7345689034</p>
							</div>							
							<div id="address">
								<p id="title">address:</p>
								<div>
									<p>line1</p>
									<p>line2</p>
									<p>line3</p>
								</div>
							</div>							
						
						</div>
						<div id="myorders">
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
						</div>	
						<div id="subscribe">
							subscribe
						</div>
					</div>
				</div>
			</div>
			<center>
				<button>enter store</button>
			</center>
			<Footer/>			
		</div>
	);
}
