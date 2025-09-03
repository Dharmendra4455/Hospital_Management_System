import express from 'express'
import {Doctorcard, Servicecard} from '../Controller/HomeCards.js'
export const Doctorroute=express.Router()
Doctorroute.get('/',Doctorcard);
export const serviceroute=express.Router()
serviceroute.get('/',Servicecard)
