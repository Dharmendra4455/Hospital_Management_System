import {doctorcard} from '../Models/Schema.js'
import {servicecard} from '../Models/Schema.js'
export const Doctorcard= async(req,res)=>{
    try{
         const card= await doctorcard.find()
         res.status(200).json(card)
    }
    catch(error){
    console.log(error)
    res.status(500).json(error)
    }
}
export const Servicecard= async(req,res)=>{
    try{
         const card= await servicecard.find()
         res.status(200).json(card)
    }
    catch(error){
    console.log(error)
    res.status(500).json(error)
    }
}