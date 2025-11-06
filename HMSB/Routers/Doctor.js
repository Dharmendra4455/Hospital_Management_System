import express from 'express'
import { Doc_data, doctors } from '../Controller/Doctor.js'
import { doclogin } from '../Controller/Doctor.js'
import { appointmentdatas } from '../Controller/Doctor.js'
import { appointmentupdate } from '../Controller/appointments.js'
export const Docroute=express.Router()
Docroute.post('/signup',doctors)
export const docloginroute=express.Router()
docloginroute.post('/login',doclogin)
export const appointmentdata=express.Router()
appointmentdata.get('/appointmentdata',appointmentdatas)
appointmentdata.get('/own_appointments',Doc_data)
export const appointmentstatus =express.Router()
appointmentstatus.post('/appointmentstatus',appointmentupdate)