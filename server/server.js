const express= require("express");
const mongoose= require("mongoose");
const cors=require("cors");
require("dotenv").config();

const app=express();

//Middlewares
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB Connected")).catch((err)=>console.log("DB Error:" ,err));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);


const noteRoutes= require("./routes/noteRoutes");
app.use("/api/notes", noteRoutes);

const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/api/dashboard", dashboardRoutes);

const sessionRoutes = require("./routes/sessionRoutes");
app.use("/api/sessions", sessionRoutes);



app.get('/',(req,res)=>{
  res.send("StudySpace API Running");
});

const PORT=3200;
app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`);
});