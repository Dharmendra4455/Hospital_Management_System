import express from 'express'
import { appointments } from '../Controller/appointments.js'
export const appoints=express.Router()
appoints.post('/appointment',appointments)