const mongoose = require("mongoose");

const conn =async(req,res) =>{
    try {
        await mongoose.connect("mongodb+srv://ssci1023:Shubhu235@cluster0.euplbeq.mongodb.net/").then(()=>{
        console.log("connected");
    });
    } catch (error) {
        res.status(400).json({
          message:"not connected",
        });
    }
};
conn();
