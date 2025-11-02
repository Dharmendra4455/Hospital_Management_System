import { appointment } from "../Models/Schema.js";
import {ObjectId} from 'mongodb'
export const appointments=async(req,res)=>{
    const{ firstname,
      lastname,
      Dateofbirth,
      email,
      gender,
      contact,
      address,
      city,
      state,
      department,
      doctor}=req.body
      const isexist=await appointment.findOne({email})
      if(isexist){
           res.status(409).send({message:"appointment already created!!"})
        }
      else{
        try{
          const data= new appointment({
              firstname,
              lastname,
              Dateofbirth,
              email,
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
   console.log(data.data)
 try{
  const searchappointmentdatas = await appointment.findOneAndUpdate({_id:new ObjectId(data.id)},{update:data.data,status:data.data[data.data.length-1].status},{new: true })
  searchappointmentdatas.save()
  res.status(200).json({message:"Status Updated Successfully"})
  }
 
  catch(err){
    res.status(400).json({message:"Internal Server Error", err})
  }
    // console.log(searchappointmentdatas)
}