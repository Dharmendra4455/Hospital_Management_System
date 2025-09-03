import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './HomeComponents/Navbar'
import  Admin  from './Dashboards/Admin'
import User from './Dashboards/User'
import Doctor from './Dashboards/Doctor'
import Home from './HomeComponents/Home'
import Login from './forms/Login'
import Forgetpassword from './forms/Forgetpassword'
//import { Doctor} from './Dashboards/Doctor'


const Routers = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user' element={<Login user={"User"}/>}/>
    <Route path='/doctor' element={<Login user={"Doctor"}/>}/>
    <Route path='/admin' element={<Login user={"Admin"}/>}/>
    <Route path='/forgetpassadmin' element={<Forgetpassword user={"Admin"}/>}/>
    <Route path='/forgetpassuser' element={<Forgetpassword user={"User"}/>}/>
    <Route path='/forgetpassdoctor' element={<Forgetpassword user={"Doctor"}/>}/>
    <Route path='/userdashboard' element={<User />}/>
    <Route path='/doctordashboard' element={<Doctor/>}/>
    <Route path='/admindashboard' element={<Admin/>}/>
   
   </Routes>
   
   </>
  )
}

export default Routers