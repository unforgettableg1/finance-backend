const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const recordRoutes = require('./routes/recordRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ ADD THIS

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Finance Dashboard API is running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// ROUTES
app.use('/api/users', userRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/auth', authRoutes); // ✅ ADD THIS

module.exports = app;