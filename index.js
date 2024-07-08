const express = require("express");
const mongoose = require("mongoose");
const studentRoute=require("./controller/studentRoute")
const bodyparser=require("body-parser");
const cors=require("cors");

const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://projectCRU:12345@cluster0.b0e96od.mongodb.net/");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))
app.use("/studentRoute",studentRoute);
app.listen(4000,()=>{
console.log("Server is running in the port 4000");
})