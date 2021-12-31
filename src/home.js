import Title from "./components/heading.js";
import Model from "./components/models.js";
import Specs from "./components/specs.js";
import Footer from "./footer.js";
import "./styles/home.css";
import "./styles/global.css";

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

var mostSold={
	1:{
		"img":"images/bike3.png",
		"model":"gs-4322"
		},
	2:{
		"img":"images/bike.png",
		"model":"gs-4323"
		},
	3:{
		"img":"images/bike2.png",
		"model":"gs-4324"
		},
	4:{
		"img":"images/bike1.png",
		"model":"gs-4325"
		},
	5:{
		"img":"images/bike2.png",
		"model":"gs-4327"
		}						
};

const expand=(event)=>{
	var ele=event.target.parentNode.nextSibling;
	if(ele.style.animationName!="expand_query"){
		ele.style.animation="expand_query 0.5s linear both";
		}
	else{
		ele.style.animation="diminish_query 0.5s linear both";		
		
		}
}

export default function Home(){
	return(
		<div id="home">
			<div id="bike_details">
				<div id="left">
				<p id="title">
					PRESENTING OUR ALL
					NEW GS-4321
				</p>
					<p>product specifications</p>
					<Specs details={specs}/>
					<button>view product details</button>
				</div>
				<img src="images/bike.png" alt="bike"/>
			</div>
			<div id="video">
				<p>Way Towards ....</p>
				<p>A good write up that relates to the video shown</p>
				<video poster="images/scooter1.png" controls>
					<source src="ride.mp4"/>
				</video>
				<p>Book a free ride now</p>
			</div>
			<div id="products_are">
				<Title title="our products are"/>
				<div id="details">
					<div id="left">
						<div id="specs">
							<div id="inner-specs">
							<div id="top">
								<img src="images/clock.png" alt="clock"/>
								<p>FAST</p>
								<p>01</p>
							</div>
							<div id="bottom">
								~ 60kMPH
							</div>
							</div>
						</div>
						<div id="specs">
							<div id="inner-specs">						
							<div id="top">
								<img src="images/durable.png" alt="durable"/>
								<p>DURABLE</p>
								<p>02</p>
							</div>
							<div id="bottom">
								~ 2 Years
							</div>	
							</div>						
						</div>
						<div id="specs">
							<div id="inner-specs">						
							<div id="top">
								<img src="images/charge.png" alt="charge"/>
								<p>CHARGE</p>
								<p>03</p>
							</div>
							<div id="bottom">
							 ~ 5 HOURS
							</div>			
							</div>				
						</div>
						<div id="specs">
							<div id="inner-specs">						
							<div id="top">
								<img src="images/economic.png" alt="economic"/>
								<p>ECONOMIC</p>
								<p>04</p>
							</div>
							<div id="bottom">
								~ RS.20k
							</div>			
							</div>				
						</div>
												
					</div>
					<div id="right">
						<video poster="images/scooter2.png" controls>
							<source src="ride.mp4"/>
						</video>
					</div>
				</div>
			</div>
			<div id="models">
				<Title title="our models"/>
				<Model items={res}/>
			</div>
			<div id="future">
				<p>Electric scooter is the future</p>
				<p>sometimes all we only need a push</p>
				<div id="repr">
					<img src="images/scooter3.png" alt="scooter"/>
					<video controls poster="images/scooter4.png">
						<source src="ride.mp4"/>
					</video>
				</div>
				<div id="specs">
					<div id="specs-inner">
						<p>01</p>
						<p>eco friendly</p>
					</div>
					<div id="specs-inner">
						<p>02</p>
						<p>commute when tired</p>
					</div>
					<div id="specs-inner">
						<p>03</p>
						<p>easy to access</p>
					</div>										
				</div>
			</div>
			<div id="most-sold">
				<Title title="most sold scooters"/>
				<Model items={mostSold}/>
			</div>
			<div id="query">
				<Title title="queries"/>
				<div>			
					<form>
						<input type="text" placeholder="your name"/>
						<input type="text" placeholder="your email address"/>
						<input type="text" placeholder="model you liked"/>
						<input type="text" placeholder="your query"/>
						<input type="submit" value="submit"/>
					</form>
					<img src="images/bike.png" alt="bike"/>
				</div>
			</div>
			<div id="facts">
				<Title title="facts and questions"/>
				<div id="facts-inner">
					<div id="question">
						<p>where do i buy these products from?</p>
						<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
					</div>
					<div id="answer">
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
					</div>
					<div id="question">
						<p>what is the warranty of this product?</p>
						<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
					</div>
					<div id="answer">
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
					</div>
					<div id="question">
						<p>how will it be delivered?</p>
						<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
					</div>
					<div id="answer">
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
					</div>
					<div id="question">
						<p>what is the guarantee that i will recieve the right product?</p>
						<img onClick={(event)=>{expand(event)}} src="images/arrow_black.png" alt="arrow_down"/>
					</div>
					<div id="answer">
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
					</div>															
				</div>
			</div>
		<Footer/>			
		</div>
	);
}
