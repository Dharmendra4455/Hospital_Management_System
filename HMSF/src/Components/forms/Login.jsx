import React, { useEffect, useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import User from '../Dashboards/User'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = (props) => {
 
  const[loggedperson,setloggedperson]=useState("")
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const[loggeduser,setloggeduser]=useState(0)
  const[loggeddoctor,setloggeddoctor]=useState(0)
  const[loggedadmin,setloggedadmin]=useState(0)

  
  useEffect(()=>{
  document.getElementById('my_modal_3').showModal()
  loggedpersonhandler()
},[])

 const loggedpersonhandler=()=>{
  setloggedperson(props.user.toLowerCase())

 }
//alert(loggedperson)
 const loginhandler=()=>{
   axios.post('http://localhost:4000/'+loggedperson+'/login',{email,password})
   .then(res=>{
    //alert(res.data.message)
    toast.success(res.data.message,{
      position: "top-center",
    autoClose: 2000,});

    if(res.data.data)
  {                       //if valid login done by user (return data else Undefine if false login)
   localStorage.setItem("loggedperson",JSON.stringify(res.data))  
   localStorage.setItem("person",loggedperson)
    if(loggedperson==='user')
    setloggeduser(true);
    if(loggedperson==='doctor')
      setloggeddoctor(true);
    if(loggedperson==='admin')
      setloggedadmin(true);
  }
  //   props.user=res.data.data.firstname
   })
   .catch(err=>{

    toast.error("Internal Server Error!!");
    toast.error("Login failed!!");
   })
 }

  return (
   <>
   {loggeduser?<Navigate to='/userdashboard'/>:loggeddoctor?<Navigate to='/doctordashboard'/>:loggedadmin?<Navigate to='/admindashboard'/>:""}
{/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="bg-white p-5 rounded relative">
    <form method="dialog" >
      {/* if there is a button in form, it will close the modal */}
     <NavLink to='/'>
     <button className="btn btn-sm bg-white btn-ghost absolute right-[2%] top-[2%] text-black">✕</button>
     </NavLink>
    </form>
   <div className="container  text-black pl-2 pr-2">
   <h3 className="font-bold text-lg mb-10 ml-[80px]">{props.user} Login</h3>
   <form action={loginhandler}>
    <div className='mb-1  text-[17px]'>Email</div>
    <input type="email" onChange={(e)=>{
      setemail(e.target.value)
    }} required className='outline bg-white  text-xl p-1 rounded' placeholder='@mail.com' />
    <p className='text-sm hidden text-red-600 '>show Error</p>
    <div className='  text-[17px]'>Password</div>
    <input type="password" onChange={(e)=>{
      setpassword(e.target.value)}} required className='outline block bg-white text-xl p-1 rounded' />
    {/* <p className='text-sm hidden text-red-600 '></p> */}
    <NavLink to={'/forgetpass'+props.user} className='text-blue-600 underline text-[14px] float-right'>Forget password ?</NavLink>
     
     {/* click and proceed to their dashboard */}

    {/* {loggeduser?
    <NavLink   to='/userdashboard'> <button className='mt-3 btn text-[18px] w-full  bg-blue-800'>Login</button></NavLink>
    :loggeddoctor? <NavLink   to='/doctordashboard'> <button className='mt-3 btn text-[18px] w-full  bg-blue-800'>Login</button></NavLink>: loggedadmin?<NavLink to='/admindashboard'> <button className='mt-3 btn text-[18px] w-full  bg-blue-800'>Login</button></NavLink>:""} */}
   <button className='mt-3 btn text-[18px] w-full  bg-blue-800'>Login</button>
   </form>
   
   {/* signup option only for User */}
   {loggedperson==="user"?
    <p className='text-sm mt-1 font-bold'>Don't have Account ? 
    <NavLink to='/' className='text-blue-600 underline text-[16px]'>SignUp</NavLink>
  </p> :"" } 
   </div>
  </div>
</dialog>

   </>
  )
}

export default Login