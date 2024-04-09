const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeeModel = require('./models/employee')

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Employee")

app.post("/", (req,res)=>{
    EmployeeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})

app.post("/login", (req,res)=>{
    const {email,password} = req.body;
    EmployeeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("password incorrect")
            }
        }
        else{
            res.json("user does not exit")
        }
    })
})

app.listen(3001, ()=>{
    console.log("Server up and Running");
})