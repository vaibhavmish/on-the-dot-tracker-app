import React, { useState } from 'react';
import "./Dashboard.css";
const Dashboard =()=>{
const [activity, setActivity]=useState("");
const [activities, setActivities]=useState(["walking", "gym"]);

	const addActivity=()=>{
		if(activity.trim() ===""){
            alert("Please Enter an activity!");
            return;
		}
		else setActivities([...activities, activity]);
	{
	setActivity("")
	
	};
}

const handleKeyDown = (event) => {
	    console.log(event);
		if(event.key==='Enter'){
			event.preventDefault();
			addActivity();
		}
	}

return(
<div>
  <h1>Dashboard</h1>
  <input type="text" value={activity} onChange={(e)=>setActivity(e.target.value)} onKeyDown={handleKeyDown}/>
  <button onClick={addActivity}>ADD ACTIVITY</button>
  {activities.map((activity,index)=>(
    <div key={index}>
      <p>{activity}</p>
      <p>Calories Burned :<span>300</span></p>
    </div>
  ))}
</div>
);
};

export default Dashboard;