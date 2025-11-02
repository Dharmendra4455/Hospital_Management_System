import express from 'express'
import { doctors } from '../Controller/Doctor.js'
import { doclogin } from '../Controller/Doctor.js'
import { appointmentdatas } from '../Controller/Doctor.js'
import { appointmentupdate } from '../Controller/appointments.js'
export const Docroute=express.Router()
Docroute.post('/signup',doctors)
export const docloginroute=express.Router()
docloginroute.post('/login',doclogin)
export const appointmentdata=express.Router()
appointmentdata.get('/appointmentdata',appointmentdatas)
export const appointmentstatus =express.Router()
 appointmentstatus.post('/appointmentstatus',appointmentupdate)
