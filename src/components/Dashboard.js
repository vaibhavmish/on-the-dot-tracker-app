import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import onthedot from './onthedot.png';

const Dashboard = () => {
  const [activity, setActivity] = useState("");
  const [activities, setActivities] = useState(["walking", "gym"]);

  useEffect(() => {
    fetch('http://localhost:5000/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.log("Error fetching activities:", err));
  }, []);

  const addActivity = () => {
    if (activity.trim() === "") {
      alert("Please enter an activity!");
      return;
    }

    fetch('http://localhost:5000/api/activities', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activity })
    })
      .then(res => res.json())
      .then(data => {
        setActivities([...activities, data.activity]);
        setActivity("");
        console.log(activities);
      })
      .catch(err => console.log("Error adding activity:", err));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addActivity();
    }
  };

  return (
    <div className="container">
      <img src={onthedot} alt="app logo" width="90" />
      <h1 className="app-heading">ON THE DOT. TRACKER APP</h1>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter an activity"
      />
      <button onClick={addActivity} disabled={!activity.trim()}>ADD ACTIVITY</button>
      {activities.map((activity, index) => (
        <div key={index} className="dashboard-card">
          <p>{activity}</p>
          <p>Calories Burned : <span>300</span></p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
