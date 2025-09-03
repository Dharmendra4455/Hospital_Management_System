import { otherdata, User} from "../Controller/User.js";
import {userlogin} from '../Controller/User.js'
import express from 'express'
import {forget} from "../Controller/User.js"
export const route=express.Router()
route.post('/signup',User)
export const route1=express.Router()
route1.post('/login',userlogin)
export const route2=express.Router()
route2.post('/forget',forget)
export const route3=express.Router()
route3.get('/otherdata',otherdata)