import { doctor } from "../Models/Schema.js"
import bcryptjs from 'bcryptjs'
export const doctors=async (req,res)=>{
  try{
    const{ firstname,
      lastname,
      Dateofbirth,
      email,
      password,
      gender,
      contact,
      address,
      city,
      state,
      department,
      salary}=req.body

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
      Dateofbirth,
      email,
      password:hashpass,
      gender,
      contact,
      address,
      city,
      state,
      department,
      salary
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
           res.status(200).json({message:"Login Successfully",data:{firstname:user.firstname,lastname:user.lastname,email:user.email}})
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
