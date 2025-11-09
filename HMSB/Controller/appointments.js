import { appointment, doctor } from "../Models/Schema.js";
import {ObjectId} from 'mongodb'
export const appointments=async(req,res)=>{
    const{
      firstname,
      lastname,
      Dateofbirth,
      email,
      dob,
      gender,
      contact,
      address,
      city,
      state,
      department,
      doctor
      }=req.body
      const isexist=await appointment.findOne({contact})
      if(isexist){
           res.status(409).send({message:"appointment already with this Contact no.s!!"})
        }
      else{
        try{
          const data= new appointment({
              firstname,
              lastname,
              Dateofbirth,
              email,
              dob,
              gender,
              contact,
              address,
              city,
              state,
              department,
              doctor
          })
            await data.save()
          res.status(200).json({message:"Appointment Successfully Created"})  
        }
        catch(err){
        res.status(404).json({message:"Internal Server Error!!"})
      }
}
 }


export const appointmentupdate =async(req,res)=>{
  const data =req.body
 try{
  await appointment.findOneAndUpdate({_id:new ObjectId(data.appointment_id)},{update:data.data,status:data.data[data.data.length-1].status},{new: true })
  const doc=await doctor.findOneAndUpdate({_id:new ObjectId(data.Doctor_id)},{Availability:data.Doc_Availabiity},{new: true })
  res.status(200).json({message:"Status Updated Successfully"})
  }catch(err){
    res.status(400).json({message:"Internal Server Error", err})
  }
    // console.log(searchappointmentdatas)
}


export const appointmentadminUpdate =async(req ,res )=>{
  const {allocateddoctor_id,alloteddoctor,allocateddate,allocatedtime ,appointmentid} =req.body 
 
  try{
  await appointment.findOneAndUpdate({_id:new ObjectId(appointmentid)},{allocateddoctor:allocateddoctor_id,alloteddate:allocateddate,allotedtime:allocatedtime,doctor:alloteddoctor},{new: true })
  await doctor.findOneAndUpdate({_id:new ObjectId(allocateddoctor_id)},{Availability:false},{new: true })
 
  res.status(200).json({message:"Appointment Updated Successfully"})
  }
  catch(err){
    res.status(401).json({message:"Internal Server Error!!",err:err})
  }
}