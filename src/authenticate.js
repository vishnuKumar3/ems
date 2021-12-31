import "./styles/authenticate.css";

const display=(event,id)=>{
	if(id=="signin"){
		event.target.style.borderBottom="2px solid #542dbc";
		event.target.nextSibling.style.borderBottom="none";		
		document.getElementById("signin").style.display="flex";
		document.getElementById("signup").style.display="none";}
	else{
		event.target.style.borderBottom="2px solid #542dbc";
		event.target.previousSibling.style.borderBottom="none";	
		document.getElementById("signin").style.display="none";
		document.getElementById("signup").style.display="flex";}		
}

export default function Authenticate(){
	return(
		<div id="authenticate">
			<div id="body">
				<div id="title">
					<img src="images/logo.png"/>
					<p>elect my scooter</p>
				</div>
				<div id="options">
					<button onClick={(event)=>display(event,"signin")}>sign in</button>
					<button onClick={(event)=>display(event,"signup")}>sign up</button>
				</div>
				<div id="main">
					<div id="signin">
						<form>
							<input type="email" placeholder="email address"/>
							<input type="password" placeholder="password"/>
						</form>
						<div id="forgot">
							<a href="#">forgot password</a>
						</div>
						<div id="bottom">
							<div id="save">
								<input type="checkbox"/>
								<p>save password</p> 
							</div>
							<button>sign in</button>
						</div>
						<p>sign in to get a chance to purchase the most trending electric scooter in town</p>								
					</div>
					<div id="signup">
						<form>									
							<input type="text" placeholder="full name"/>
							<input type="email" placeholder="email address"/>
							<input type="password" placeholder="password"/>
							<input type="password" placeholder="re-enter password"/>
						</form>
						<div id="bottom">
							<div id="save">
								<input type="checkbox"/>
								<p>save password</p> 
							</div>
							<p>signup to get most amazing offers on electric scooters</p>
							<button>sign up</button>
						</div>					
					</div>
				</div>
			</div>
		</div>
	);
}
