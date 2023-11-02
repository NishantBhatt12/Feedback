const express = require("express");
const mongoose = require("mongoose");

const path = require('path');
let publicpath = path.join(__dirname, 'public')

const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));

// var route=require("./route");
app.use("/images",express.static('images'));
// app.use("/",route);

mongoose.connect('mongodb://127.0.0.1:27017/UserData')
.then(()=>{
    console.log("Database Connection Done");
}).catch(()=>{
    console.log("not connected");
});
const User=require("./model/user");

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    // res.render("feedback");
    res.sendFile(`${publicpath}/feedback.html`);
});
app.get("/T&C",(req,res)=>{
    // res.render("feedback");
    res.sendFile(`${publicpath}/T&C.html`);
});
app.get("/contact_us",(req,res)=>{
    // res.render("feedback");
    res.sendFile(`${publicpath}/contact_us.html`);
});
app.post("/", async(req,res) =>{
    const data=new User(req.body)
    await data.save()
    res.render("thankYouPage");
});

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})