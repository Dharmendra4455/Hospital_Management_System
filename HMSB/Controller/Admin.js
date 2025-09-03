import bcrypt from 'bcryptjs'
import {admin} from '.././Models/Schema.js' 
import { appointment } from '.././Models/Schema.js'
import { doctor} from '.././Models/Schema.js'
import { Users } from '.././Models/Schema.js'
export const Admincontroller=async(req,res)=>{ 
    const {firstname,lastname,Dob,email,password}=req.body
try{
    const isexist=await admin.findOne({email})
    if(isexist){
        res.status(200).json({message:"email already exist!!"})
      }
    else{
       const hashpassword=await bcrypt.hash(password,10)
       
       const data=await new admin({
        firstname,
        lastname,
        Dob,
        email,
        password:hashpassword, 
    })
    await data.save() 
   res.status(200).json({message:"Account Created Successfully",data})
}
}
catch(err){
    res.status(404)({message:"Account Creation Failed"})
}
}

export const admin_login=async(req,res)=>{
     const{email,password}=req.body
    
     const data=await admin.findOne({email})
    if(data){
        const ispass=await bcrypt.compare(password,data.password)
        if(ispass)
        res.status(200).json({
            message:"Login Successfully",
            data:{first:data.firstname,last:data.lastname,email:data.email},
           
            })
        else 
         res.status(200).json({message:"Email or Password Wrong!!"})
    }
    else{
        res.status(200).json({message:"Email or Password Wrong!!"})
    }
}

export const otherdata=async(req,res)=>{
   const appointmentdata=await appointment.find({})
     const doctordata=await doctor.find({})
     const Userdata=await Users.find({})
    res.send({
         appointmentdata,
            doctordata,
            Userdata,
    })

}