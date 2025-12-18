import { appointment, doctor } from "../Models/Schema.js";
import {ObjectId} from 'mongodb'

// Appointment Create Section
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
      if(isexist)
        {
          res.status(409).send({message:"appointment already Exist with this Contact no.s!!"})
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

// Appointment Update by Doctor Section
export const appointmentupdate =async(req,res)=>{
  const data =req.body
  const updated_data={...data.data[0],updatedAt: new Date()}  //add Last Update time 
 try{
  await appointment.findOneAndUpdate
  (
    {_id:new ObjectId(data.appointment_id)},          //findOne
    {$push:{update:updated_data},                    //Update- push new update into update array 
    $set:{status:data.data[data.data.length-1].status}},{new: true }  //last Update status will be status of appointment
  )
  const doc=await doctor.findOneAndUpdate
  (
    {_id:new ObjectId(data.Doctor_id)},
    {Availability:data.Doc_Availabiity},{new: true }
  )                                                   //{new:true} use only for Update time findOneAndUpdate to return new updated as res ,without it return old value as res
    res.status(200).json({message:"Status Updated Successfully"})
  }catch(err){
    res.status(400).json({message:"Internal Server Error", err})
  }
    // console.log(searchappointmentdatas)
}


// Appointment Update by Admin Section
export const appointmentadminUpdate =async(req ,res )=>{
  const {allocateddoctor_id,alloteddoctor,allocateddate,allocatedtime ,appointmentid} =req.body 
 
  try{
  await appointment.findOneAndUpdate({_id:new ObjectId(appointmentid)},{allocateddoctor:allocateddoctor_id,alloteddate:allocateddate,allotedtime:allocatedtime,doctor:alloteddoctor},{new: true })
  await doctor.findOneAndUpdate({_id:new ObjectId(allocateddoctor_id)},{Availability:false},{new: true }) //after allocate appointment to Doc make that Doc availability false
  res.status(200).json({message:"Appointment Updated Successfully"})
  }
  catch(err){
    res.status(401).json({message:"Internal Server Error!!",err:err})
  }
}