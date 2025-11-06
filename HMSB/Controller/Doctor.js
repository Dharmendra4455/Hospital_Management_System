import { appointment, doctor } from "../Models/Schema.js"
import bcryptjs from 'bcryptjs'
import {ObjectId} from 'mongodb'
import { deletedoctor } from "../Routers/Admin.js";
export const doctors=async (req,res)=>{
  try{
    const{ firstname,
      lastname,
      dob,
      email,
      password,
      gender,
      contact,
      address,
      city,
      state,
      department,
      salary,
      dayfrom,
      dayto,
      timefrom,
      timeto}=req.body

    console.log('Received body:', req.body);
    const exist= await doctor.findOne({email})
    if(exist){
      // console.log('User already exists:', email);
      return res.status(409).send({message:"User of this email already exist!!"})
    }
    else{
       const hashpass=await bcryptjs.hash(password,10)
    const data=new doctor({
      firstname,
      lastname,
      dob,
      email,
      password:hashpass,
      gender,
      contact,
      address,
      city,
      state,
      department,
      salary,
      Availabledayfrom:dayfrom,
      Availabledayto:dayto,
      Availabletimefrom:timefrom,
      Availabletimeto:timeto,
    });
    await data.save()
    console.log('Doctor saved:', data);
    return res.status(200).json({message:"Account Created Successfully",data})
  }}
  catch(err){
    console.error('Error in doctors controller:', err);
    return res.status(500).json({message:"Something went Wrong",Error:err.message})
  }
}
 export const doclogin=async(req,res)=>{
      const {email,password}=req.body
      try{
      const user= await doctor.findOne({email})
      if(user)
        {
          const passcheck=await bcryptjs.compare(password,user.password)
         if(passcheck)
          {
           res.status(200).json({message:"Login Successfully",data:{id:user._id,firstname:user.firstname,lastname:user.lastname,email:user.email}})
          }
         else
          {
           res.status(200).json({message:"Invalid email or Password"})
          }
        }
      else
        {
          res.send({message:"Doctor not Exist"})
        }
 }
 catch(err)
   {
    res.status(400).json({message:"Internal Server Error!"})
   }
}

export const appointmentdatas=async(req,res)=>{
  const appointmentdata=await appointment.find({})
  res.send(appointmentdata)
}
export const Doc_data=async(req,res)=>{
  const doc_id =req.query.id;
  console.log(doc_id)
  const appointmentdata=await appointment.find({allocateddoctor : new ObjectId(doc_id)})
  res.send(appointmentdata)
}


export const deletedoctorAccount=async(req,res)=>{
const doc_id=req.params.id.slice(1)
//  console.log(doc_id)
try{
const isallocated = await appointment.find({allocateddoctor:doc_id}) 
if(isallocated.length > 0){ 
  res.status(401).json({message:"First Unallocate Doctor!!"})
}
else{
  const deleteddoc=await doctor.findOneAndDelete({_id:new ObjectId(doc_id)})
  if (!deleteddoc) {
      return res.status(404).json({ message: 'account not found' });
    }
   return res.status(201).json({message :"account deleted Successfully"})
}

}
catch(err){
res.status(401).json({message:"account deleted !!"})
}}