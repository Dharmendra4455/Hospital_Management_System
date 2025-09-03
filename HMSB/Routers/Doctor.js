import express from 'express'
import { doctors } from '../Controller/Doctor.js'
import { doclogin } from '../Controller/Doctor.js'
export const Docroute=express.Router()
Docroute.post('/signup',doctors)
export const docloginroute=express.Router()
docloginroute.post('/login',doclogin)