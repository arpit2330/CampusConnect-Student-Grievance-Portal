// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());


// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo Error:", err));

// Routes
const authRoutes = require("./routes/Auth");
app.use("/api/Auth", authRoutes);
debugger
//student complain routes
const complaintRoutes = require('./routes/complaints');
app.use('/api/complaints', complaintRoutes);


app.get("/", (req, res) => res.send("API running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


