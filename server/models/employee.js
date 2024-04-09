const mongoose = require("mongoose")

const EmploySchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const EmployeeeModel = mongoose.model("Employee", EmploySchema)
module.exports = EmployeeeModel