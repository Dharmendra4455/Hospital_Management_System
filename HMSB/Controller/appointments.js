import { appointment } from "../Models/Schema.js";
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