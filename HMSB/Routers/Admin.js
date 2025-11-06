import {admin_login, Admincontroller,otherdata} from '../Controller/Admin.js'
import express from 'express'
import { appointment } from '../Models/Schema.js'
import { appointmentadminUpdate } from '../Controller/appointments.js'
import { deletedoctorAccount } from '../Controller/Doctor.js'
export const Adminroute=express.Router()
Adminroute.post('/signup',Admincontroller)   //for creating new admin only developer can do
export const Admin_login=express.Router()
Admin_login.post('/login',admin_login)
export const Otherdata=express.Router()
Otherdata.get('/otherdata',otherdata)
export const  appointmentupdate = express.Router()
appointmentupdate.post('/appointmentupdate',appointmentadminUpdate)
export const deletedoctor = express.Router()
deletedoctor.delete('/deletedoctor:id',deletedoctorAccount)