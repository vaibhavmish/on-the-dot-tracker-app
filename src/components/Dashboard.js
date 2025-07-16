import React, { useState, useEffect, useRef } from 'react';
import "./Dashboard.css";
import onthedot from './onthedot.png';

const Dashboard = () => {
  const [activity, setActivity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [ShowToggle, setShowToggle] = useState(false);
  const [activities, setActivities] = useState([{activity: "walking", cal_pm:1.2}, {activity :"gym", cal_pm:1.2}, {activity:"Badminton", cal_pm:5.8}]);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/activities')
      .then(res => res.json())
      .then(data => {
        setActivities(data);
        inputRef.current?.focus();
        console.log("use", data);
      })
      .catch(err => console.log("Error fetching activities:", err));
  }, []);

  // const OnClick = () => {
  //   const All_activities = activities.map((item,index)=>{
  //     item= item.activity
  //   });

  //   setSuggestions(All_activities);
  // }

  const handleChange = (e) =>{
    const value = e.target.value;
    setActivity(value);
    console.log(value)
    const filter = activities.filter(item =>
      item.activity.toLowerCase().startsWith(value.toLowerCase()))

    setSuggestions(filter);
    console.log(suggestions, filter, activities)
  }

  const addActivity = (activityToAdd) => {
    const activityName = activityToAdd || activity;
    console.log("activity", activity)
    if (activityName.trim() === "") {
      alert("Please enter an activity!");
      return;
    }

    fetch('http://localhost:5000/api/activities', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({activity: activityName })
    })
      .then(res => res.json())
      .then(data => {
        setActivities([...activities, data]);
        setActivity("");
      })
      .catch(err => console.log("Error adding activity:", err));
  };

  const onClickToggleButton = () =>{
    if(ShowToggle){
      setShowToggle(false);
      setSuggestions([]);
      console.log("togg", ShowToggle, suggestions)
    }
    else{
      console.log("togg2", ShowToggle, suggestions)
      setShowToggle(true);
      setSuggestions(activities);
    }
  }

  const handleFocus = () =>{
    setSuggestions(activities);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addActivity();
    }
  };
 
  const DownArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

  return (
    <div className="container">
      <img src={onthedot} alt="app logo" width="90" />
      <h1 className="app-heading">ON THE DOT. TRACKER APP</h1>
      <h1>Dashboard</h1>
      <div className='div-activity'>
        <input
        ref={inputRef}
        type="text"
        value={activity}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={onClickToggleButton}
        placeholder="Walking , Badminton etc"
      />
      <div className="toggleDropdown" onClick={onClickToggleButton}>
        <DownArrowIcon/>
      </div>
      </div>
      {suggestions.length>0 && (
        <ul className='dropdown'>
          {suggestions.map((item,index)=>(
             <li
                key={index}
                onClick={()=>{
                  addActivity(item.activity)
                  setActivity("");
                  setSuggestions([]);
                }}
             >
              {item.activity}
             </li>          
 
          ))}  
        </ul>
      )}
      <button onClick={addActivity}>ADD ACTIVITY</button>
      {activities.map((item, index) => (
        <div key={index} className="dashboard-card">
          <p>{item.activity}</p>
          <p>Calories per min : <span>{item.cal_pm}</span></p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
