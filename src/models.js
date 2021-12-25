export default function Models(models){
	console.log(models.items);
	return(
		<div id="model-inner">
			{Object.entries(models.items).map(([key,value],index)=>{
				return(
				<div id="card">
				<img src={value.img}/>
				<p>{value.model}</p>
				<button><div>
					<p>add to cart</p>
					<img src="images/cart.png"/>
					</div>
				</button>
				<button>+ compare</button>
				</div>);})}
		</div>
	);
}
