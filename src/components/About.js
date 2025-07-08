import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      title: "Task Scheduling",
      description: "Set recurring tasks, assign deadlines, and prioritize your work."
    },
    {
      title: "Real-time Analytics",
      description: "Track your progress with detailed analytics on task completion and project performance."
    },
    {
      title: "Collaboration Tools",
      description: "Share your task lists with team members and collaborate in real-time."
    },
    {
      title: "Notification System",
      description: "Stay on track with smart reminders and notifications for upcoming deadlines."
    },
    {
      title: "Data Export",
      description: "Easily export your task data and progress reports for future analysis or sharing."
    }
  ];

  return (
    <div className="about-container">
      <h1>On the Dot Tracker</h1>
      <p>
        On the Dot Tracker is a feature-rich task management tool, designed to help individuals <br />
        and teams stay organized, track progress, and meet deadlines efficiently.
      </p>

      <div className="features-container">
        <h2>Key Features:</h2>
        <div className="cards-wrapper">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
