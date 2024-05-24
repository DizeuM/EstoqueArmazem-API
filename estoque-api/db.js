const mongoose=require('mongoose')

const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", false);

const URL = "mongodb+srv://dizeu:<password>@cluster0.uskmwbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports=()=>{
    return mongoose.connect(URL)
}