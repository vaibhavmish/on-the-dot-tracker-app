import React, { useState, useEffect, useRef } from 'react';
import "./Dashboard.css";
import onthedot from './onthedot.png';

const Dashboard = () => {
  const [activity, setActivity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [ShowToggle, setShowToggle] = useState(false);
  const [activities, setActivities] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/activities')
      .then(res => res.json())
      .then(data => {
        setActivities(data);
        inputRef.current?.focus();
      })
      .catch(err => console.log("Error fetching activities:", err));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setActivity(value);

    const filtered = activities.filter(item =>
      item.activity.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const addActivity = (selected) => {
    const name = typeof selected === "string" ? selected : activity;
    const activityName = name.trim();

    console.log("acitvity name dahs", activityName,name,selected)

    if (!activityName) {
      alert("Please enter a valid activity.");
      return;
    }

    fetch('http://localhost:5000/api/activities', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activity : activityName })
    })
      .then(res => {
        console.log(res)
        if (!res.ok) throw new Error("Failed to add activity");
        return res.json();
      })
      .then(data => {
        setActivities(prev => [...prev, data]);
        setActivity("");
        setSuggestions([]);
      })
      .catch(err => console.log("Error adding activity:", err));
  };

  const onClickToggleButton = () => {
    setShowToggle(!ShowToggle);
    setSuggestions(!ShowToggle ? activities : []);
  };

  const handleFocus = () => {
    setSuggestions(activities);
  };

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
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  const seen = new Set();
  const filtered_suggestions=[];

  for (const item of suggestions){
    const name = item.activity.toLowerCase();
    if(!seen.has(name)){
      seen.add(name);
      filtered_suggestions.push(name);
      console.log("ffffffffffff",filtered_suggestions);
    }
    
  }


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
          onFocus={handleFocus}
          placeholder="Walking, Badminton etc"
        />
        <div className="toggleDropdown" onClick={onClickToggleButton}>
          <DownArrowIcon />
        </div>
      </div>

      {filtered_suggestions.length > 0 && (
        <ul className='dropdown'>
          {filtered_suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                addActivity(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => addActivity()}>ADD ACTIVITY</button>

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
