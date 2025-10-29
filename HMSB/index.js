import express from "express";
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from "dotenv";
const app=express();
app.use(cors())
app.use(express.json())
dotenv.config();
const Port=process.env.PORT||4001;
const Mongouri=process.env.MONGODB_URL2;

import {Doctorroute} from "./Routers/cardroute.js"
import {serviceroute} from "./Routers/cardroute.js"
import { route } from "./Routers/Userroute.js";
import {route1} from './Routers/Userroute.js'
import {route2} from './Routers/Userroute.js'
import {route3} from './Routers/Userroute.js'
import { Admin_login, Adminroute, Otherdata } from "./Routers/Admin.js";
import { Docroute } from "./Routers/Doctor.js";
import { docloginroute } from "./Routers/Doctor.js";
import { appoints } from "./Routers/appointment.js";

 app.use('/doctorcard',Doctorroute)
 app.use('/servicecard',serviceroute)
 app.use('/user',route)
 app.use('/user',route1)
 app.use('/user',route2)
 app.use('/user',route3)
 app.use('/admin',Adminroute)  //for New admin signup
 app.use('/admin',Admin_login)
 app.use('/admin',Otherdata)
 app.use('/doctor',Docroute)
 app.use('/doctor',docloginroute)
 app.use('/user',appoints)
//DB Connectivity

try{
  mongoose.connect(Mongouri);
  console.log("Connected to Mongodb")
  console.log(Mongouri)
}
catch(error){
    console.log("Error :",error)
}
app.get('/check',(req,res)=>{
   res.send("Working")
})

app.listen(Port,()=>{
 console.log("app Listening on port no.s",Port)
})