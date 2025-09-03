import {admin_login, Admincontroller,otherdata} from '../Controller/Admin.js'
import express from 'express'
export const Adminroute=express.Router()
Adminroute.post('/signup',Admincontroller)   //for creating new admin only developer can do
export const Admin_login=express.Router()
Admin_login.post('/login',admin_login)
export const Otherdata=express.Router()
Otherdata.get('/otherdata',otherdata)
