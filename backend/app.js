const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Sample in-memory activity data
const activities = [
  { activity: "Walking", cal_pm: 3.8, hp_pm: 1.2 },
  { activity: "Badminton", cal_pm: 5.5, hp_pm: 1.8 },
  { activity: "Gym", cal_pm: 1.2, hp_pm: 1.8 },
];

// GET all activities
app.get('/api/activities', (req, res) => {
  res.json(activities);
});

// POST a new activity
app.post('/api/activities', (req, res) => {
  const newActivityName = req.body.activity?.trim();
  console.log("activityName:", newActivityName);

  if (!newActivityName || typeof newActivityName !== 'string') {
    return res.status(400).json({ error: "Invalid activity name" }); // ✅ Proper error handling
  }

  const normalized = newActivityName.toLowerCase();
  const exists = activities.some(a => a.activity.toLowerCase() === normalized);

  // Optional: handle duplicates
  // if (exists) {
  //   return res.status(409).json({ error: "Activity already exists" });
  // }

  const formattedName =
    newActivityName.charAt(0).toUpperCase() + newActivityName.slice(1).toLowerCase();

  const newActivity = {
    activity: formattedName,
    cal_pm: 1.3,
    hp_pm: 1.3,
    id: activities.length + 1,
  };

  activities.push(newActivity);

  console.log("New activity added:", newActivity);
  res.status(201).json(newActivity);
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
