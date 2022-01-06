import "./styles/paid_alert.css";

const close_fun=()=>{
	var ele=document.querySelector("#paid");
	if(ele.style.display=="flex")
		{ele.style.animation="paidZoom 1s linear both";}
}

export default function Paid(){
	return(
		<div id="paid">
			<div id="alert">
				<div id="section1">
					<button onClick={close_fun}><img src="images/cancel.png"/></button>
				</div>
				<div id="section2">
					<div id="tick">
						<img src="images/tick.png"/>
					</div>	
					<div id="text">
						<p>Your order has been placed successfully</p>
						<p>PAYMENT STATUS: PAID</p>
					</div>					
				</div>
			</div>
		</div>
	);
}
