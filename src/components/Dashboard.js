import React, { useState } from 'react';
import "./Dashboard.css";
import onthedot from './onthedot.png';
import { Link } from 'react-router-dom';

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
<div className="container">
  <img src={onthedot} alt="app logo" width="90"/>
  <h1 className="app-heading">ON THE DOT. TRACKER APP</h1>
  <h1>Dashboard</h1>
  <input type="text" value={activity} onChange={(e)=>setActivity(e.target.value)} onKeyDown={handleKeyDown}/>
  <button onClick={addActivity}>ADD ACTIVITY</button>
  {activities.map((activity,index)=>(
    <div key={index} className="dashboard-card">
      <p>{activity}</p>
      <p>Calories Burned :<span>300</span></p>
    </div>
  ))}
</div>
);
};

export default Dashboard;