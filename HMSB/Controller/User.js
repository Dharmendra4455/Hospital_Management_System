import mongoose from "mongoose";
import {Users} from "../Models/Schema.js";
import { appointment } from "../Models/Schema.js";
import { json } from "express";
import bcryptjs from 'bcryptjs'
import { doctor } from "../Models/Schema.js";


export const User=async(req,res)=>{
try {
    const {firstname,lastname,Dateofbirth,email,password}=req.body;
   
    const user=await Users.findOne({email})
    if(user){
        res.status(200).json({message:"email already exist!!"})
    }
    else{
        const hashpass=await bcryptjs.hash(password,10);
        const newuser=new Users({
            firstname,
            lastname,
            Dateofbirth,
            email,
            password:hashpass
        });
        await newuser.save();
        res.status(200).json({message:"User Successfully Created"})
    
}

} 
catch (error) {
    res.status(400).json({message:error})
}
}

export const userlogin=async(req,res)=>{
    const {email,password}=req.body
    try{
    const user= await Users.findOne({email})
    if(user){
    const passcheck=await bcryptjs.compare(password,user.password)
    if(passcheck){
        res.status(200).json({message:"Login Successfully",data:{firstname:user.firstname,lastname:user.lastname,email:user.email}})
       
    }
    else{
        res.status(200).json({message:"Invalid email or Password"})
    }
    }
    else{
        res.send({message:"User not Exist"})
    }
}
catch(error){
    res.status(400).json({message:"Internal Server Error"})   
}
}
export const forget=async(req,res)=>{
 const email=req.body.email;
 const firstname=req.body.firstname;
 //const Dateofbirth=req.body.Dateofbirth;
try{
 const data=await Users.findOne({email})  
 if(data)
  res.send({message:"Data found",data})  
 else{
    res.send({message:"Data not found"})  
}}
catch(err){
    console.log(err)
}
}

export const otherdata=async(req,res)=>{
    const email=req.query.email;
   
     const doctordata=await doctor.find({})
     const appointmentdata=await appointment.find({email})
    res.send({
         appointmentdata,
            doctordata,
           
    })

}
