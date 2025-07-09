const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());

const activities = [
  "walking",
  "swimming",
  "sports",
  "gymnastic"
];

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/api/activities', (req, res) => {
  res.json(activities);
});

app.post('/api/activities', (req, res) => {
  const newActivity = req.body.activity?.trim();
  
  if (!newActivity) {
    return res.status(400).json({ error: "Please enter an activity" });
  }

  activities.push(newActivity);

  res.status(201).json({
    message: "New activity added",
    activity: newActivity,
    id:`activity`+1 
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
