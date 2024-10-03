import React from 'react';
import './About.css';
import OTLOGO from "./ot-logo.png";

const About = () => { 
return(
 <div className="about-container">
   <div className="logo-container">
     <img src={OTLOGO} alt="LOGO"/>
   </div>
   <h1>On the Dot Tracker</h1>
   <p>On the Dot Tracker is a feature-rich task management tool, designed to help individuals <br/> and teams stay organized,
    track progress, and meet deadlines efficiently.</p>
   <div className="features-container">
     <h2>Key Features:</h2>
     <ul>
       <li><b>Task Scheduling:</b> Set recurring tasks, assign deadlines, and prioritize your work.</li>
       <li><b>Real-time Analytics:</b> Track your progress with detailed analytics on task completion and project performance.</li>
       <li><b>Collaboration Tools:</b> Share your task lists with team members and collaborate in real-time.</li>
       <li><b>Notification System:</b> Stay on track with smart reminders and notifications for upcoming deadlines.</li>
       <li><b>Data Export:</b> Easily export your task data and progress reports for future analysis or sharing.</li>
     </ul>
    </div> 
 </div>  
 )
};

export default About;