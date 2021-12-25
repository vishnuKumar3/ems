import Title from "./heading.js";
import Model from "./models.js";

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
}

export default function Home(){
	return(
		<div id="home">
			<div id="bike_details">
				<div id="left">
				<p>
					PRESENTING OUR ALL
					NEW GS-4321
				</p>
					<p>product specifications</p>
					<div id="specs">
						<div id="specs-child"> 
							<p>5 HOURS</p>
							<p>charge time</p>
						</div>
						<div id="specs-child"> 
							<p>150 kg</p>
							<p>max load</p>
						</div>
						<div id="specs-child"> 
							<p>50 km</p>
							<p>per charge</p>
						</div>
						<div id="specs-child" style={{boder:"none"}}> 
							<p>1000W</p>
							<p>motor</p>
						</div>
					</div>
					<button>view product details</button>
				</div>
				<img src="images/bike.png" alt="bike"/>
			</div>
			<div id="video">
				<p>Way Towards ....</p>
				<p>A good write up that relates to the video shown</p>
				<video controls>
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
								<img src="images/clock.png"/>
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
								<img src="images/durable.png"/>
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
								<img src="images/charge.png"/>
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
								<img src="images/economic.png"/>
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
						<video controls>
							<source src="ride.mp4"/>
						</video>
					</div>
				</div>
			</div>
			<div id="models">
				<Title title="our models"/>
				<Model items={res}/>
			</div>
		</div>
	);
}
