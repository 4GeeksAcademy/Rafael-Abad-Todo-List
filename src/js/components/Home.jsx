import React from "react";
import { useEffect,useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [taskArray, setTaskArray]=useState([]);
	const [input, setInput]=useState("");
	
	const handleKeyPress=(e)=>{
		if (e.key === "Enter"){
			setTaskArray([...taskArray, input]);
			setInput("");
		}
	};
	const deleteTask=(index)=>{
			setTaskArray(taskArray.filter((uselessVariable,i)=>i!==index));
	};


	return (
		<div className="text-center">
            <h1>Todo List</h1>
			<input 
			type="text"
			placeholder="Write your task here"
			value={input}
			onChange={(e)=>setInput(e.target.value)}
			onKeyDown={handleKeyPress}
			></input>
			<ul>
				{taskArray.map((task,index)=>(
					<li key={index}>{task}
					<button onClick={()=> deleteTask(index)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;