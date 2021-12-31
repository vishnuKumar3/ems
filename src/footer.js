import "./styles/footer.css";

export default function Footer(){
	return(
		<div id="footer">
			<div id="top1">
				<div id="title">
					<img src="images/logo.png"/>
					<p>elect my scooter</p>
				</div>
				<div id="search">
					<input type="text" placeholder="search"/>
					<a href="#">subscribe</a>
				</div>
				<div id="links">
					<a href="#">locate me</a>
					<a href="#">contact me</a>
				</div>
			</div>
			<div id="specify">
				<p>for:early offers on new scooters</p>
				<p>also,we hate spamming don't worry</p>
			</div>
			<div id="center">
				<img alt="bike1" src="images/bike.png"/>
				<img alt="bike1" src="images/bike1.png"/>
				<img alt="bike1" src="images/bike.png"/>								
			</div>
			<div id="bottom1">
				<p>office address: 123-f punjab, india || email address:electmyscooter@gmail.com || phone number: +91-9012345678</p>
				<p>&copy; 2021 electmyscooter - all rights reserved</p>
			</div>
		</div>
	);
}
