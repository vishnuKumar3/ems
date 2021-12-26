import "../styles/specs.css";

export default function Specs(specs){
	return(
		<div id="specs_main">
			{Object.entries(specs.details).map(([key,value],i)=>{
				if(key==4)
				return <div id="specs-child_last"> 
					<p>{value.title}</p>
					<p>{value["sub"]}</p>
				</div>;
				else
				return <div id="specs-child"> 
					<p>{value.title}</p>
					<p>{value["sub"]}</p>
				</div>;
			})}
		</div>
	);
}
