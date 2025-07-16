const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());

const activities = [
  { activity: "Walking", cal_pm: 3.8, hp_pm: 1.2 },
  { activity: "Badminton", cal_pm: 5.5, hp_pm: 1.8 },
  {activity :"gym", cal_pm:1.2, hp_pm: 1.8}
];


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/api/activities', (req, res) => {
  res.json(activities);
});

app.post('/api/activities', (req, res) => {
  const newActivityName = req.body.activity?.trim();
  
  if (!newActivityName) {
    return res.status(400).json({ error: "Please enter an activity" });
  }
  
  const newActivity = {
    activity: newActivityName,
    cal_pm: 1.3,      
    hp_pm: 1.3,  
    id: activities.length + 1
  };

  activities.push(newActivity);

  res.status(201).json(newActivity)
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
