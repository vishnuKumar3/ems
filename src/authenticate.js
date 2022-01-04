import "./styles/authenticate.css";
import axios from "axios";

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


const signIn=async ()=>{
	var ele=document.getElementById("signin");
	var email=ele.children[0].children[0].value;
	var pass=ele.children[0].children[1].value;
	/*await axios({
		method:"post",
		url:"https://big-cms.herokuapp.com/users/login",		
    		data:{"data":{
       			 "Email": "vidhi@vidhi.com",
        		 "Password": "vidhi"
        		 }
   			 }
	}).then((res)=>{console.log(res);});*/
	await fetch(
	"http://localhost:5000/users/login",
	{method:"post",
	headers:
		{"Content-Type":"application/json"},
		body:JSON.stringify({
   				"data":{
			       	"Email": email,
         			"Password": pass
			        		 }
        		 		})
}).then((res)=>{console.log(res);return res.json()}).then((res)=>{console.log(res)})
	
}


const signUp=async ()=>{
	var ele=document.getElementById("signup");
	var first_name=ele.children[0].children[0].value;
	var last_name=ele.children[0].children[1].value;
	var email=ele.children[0].children[2].value;
	var password=ele.children[0].children[3].value;
	var re_password=ele.children[0].children[4].value;
	await fetch(
	"http://localhost:5000/users",
	{method:"post",
	headers:{"Content-Type":"application/json"},
		body:JSON.stringify({
					   "data":{ 
					    "First Name": first_name,
					    "Last Name": last_name,
					    "Email": email,
					    "Password": password,
					    "Confirm": re_password,
					    "Roles":[],
					    "Permissions":[],
					    "isCustomer": true
					   }
					
        		 		})
}).then((res)=>{console.log(res);return res.json()}).then((res)=>{console.log(res)})
	
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
							<input type="email" placeholder="Email address"/>
							<input type="password" placeholder="Password"/>
						</form>
						<div id="forgot">
							<a href="#">forgot password</a>
						</div>
						<div id="bottom">
							<div id="save">
								<input type="checkbox"/>
								<p>save password</p> 
							</div>
							<button onClick={signIn}>sign in</button>
						</div>
						<p>sign in to get a chance to purchase the most trending electric scooter in town</p>								
					</div>
					<div id="signup">
						<form>									
							<input type="text" placeholder="First name"/>
							<input type="text" placeholder="Last name"/>							
							<input type="email" placeholder="Email address"/>
							<input type="password" placeholder="Password"/>
							<input type="password" placeholder="Re-enter password"/>
						</form>
						<div id="bottom">
							<div id="save">
								<input type="checkbox"/>
								<p>save password</p> 
							</div>
							<p>signup to get most amazing offers on electric scooters</p>
							<button onClick={signUp}>sign up</button>
						</div>					
					</div>
				</div>
			</div>
		</div>
	);
}
