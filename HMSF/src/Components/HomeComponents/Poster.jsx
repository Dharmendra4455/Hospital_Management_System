import React, { useEffect ,useState} from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'
import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.avif'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.avif'
const Poster = (props) => {
   const [theme,settheme]=useState()
   const [close, setclose] = useState(false)
   const [firstname,setfirstname]=useState('')
   const [lastname,setlastname]=useState('')
   const [Dateofbirth,setDateofbirth]=useState('')
   const [email,setemail]=useState('')
   const [password,setpassword]=useState('')
   const [signup,setsignup]=useState(false)

   const canclehandler=()=>{
    setclose(true);
   }
  
   useEffect(()=>{
      settheme(props.theme)
    
   },[props])
  const submithandler=()=>{
   const data={firstname,lastname,Dateofbirth,email,password}
   axios.post("http://localhost:4000/user/signup",data).
    then(res=>{
    toast.success(res.data.message)
    setDateofbirth('')
    setfirstname('')
    setlastname('')
    setpassword('')
    setemail('')
    setsignup(true) })
    .catch(err=>{
     console.log(err,res.data.message)
   })
  
  }
  return (
   <>
   {signup?<Navigate to='/user'/>:""}
   <div className='flex justify-center  h-auto relative z-1'>
   <div className="carousel w-full h-[615px]">
  <div id="item1" className="carousel-item w-full ">
    <img
      src={img1}
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={img2}
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={img3}
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={img4}
      className="w-full bg-cover" />
  </div>
</div>
<div id='usersignup' className={close ? 'hidden': theme==='bright'?'mt-8 ml-5 p-5 rounded  absolute left-0 border-4 border-zinc-300 bg-white  shadow-md shadow-zinc-400 text-black':'mt-8 ml-5 p-5 rounded  absolute left-0 border-4 border-zinc-900  bg-zinc-700  shadow-md shadow-zinc-700 text-white'} >

  <div className="container  relative pr-3 " >
   <button className={close ? 'hidden': theme==='bright'? "btn btn-sm text-xl  hover:border-none bg-white btn-ghost absolute right-[-9%] top-[-4%]  text-black":"btn btn-sm text-xl  hover:border-none bg-zinc-600 btn-ghost absolute right-[-9%] top-[-4%]  text-white"} onClick={()=>{
    canclehandler()
   }}>✕</button>
   <h3 className="font-bold text-xl mb-6 ml-12">Appointment</h3>

   <form action={submithandler}>
   <div className='mb-1  text-[17px]'> First Name<sup className='text-[17px] text-red-600 '>*</sup></div>
   <input type="text" onChange={(e)=>{
     setfirstname(e.target.value);}} required className={theme==='bright'?'outline bg-zinc-100  text-md p-1 rounded w-[220px]':'outline bg-zinc-700  text-md p-1 rounded w-[220px]'} placeholder='Username' />
   <p className='text-sm hidden  text-red-600 '>show Error</p>
    
   <div className='mb-1  text-[17px]'> LastName</div>
   <input type="text" onChange={(e)=>{
     setlastname(e.target.value);}}
      className={theme==='bright'?'outline bg-zinc-100  text-md p-1 rounded w-[220px]':'outline bg-zinc-700  text-md p-1 rounded w-[220px]'}  placeholder='lastname' />
   <p className='text-sm hidden  text-red-600 '>show Error</p>
   <div className='mb-1 mt-1 text-[17px]'>DOB<sup className='text-[17px] text-red-600 '>*</sup></div>
   <input type='date' onChange={(e)=>{
     setDateofbirth(e.target.value);}}
    required className={theme==='bright'?'outline bg-zinc-200  text-md p-1 rounded w-[220px]':'outline bg-zinc-700  text-md p-1 rounded w-[220px]'}  placeholder='Username' />
   <p className='text-sm hidden  text-red-600 '>show Error</p>
   
    <div className='mb-1 mt-1  text-[17px]'>Email<sup className='text-[17px] text-red-600 '>*</sup></div>
    <input type="email" onChange={(e)=>{
     setemail(e.target.value);}}
    required className={theme==='bright'?'outline bg-zinc-100  text-md p-1 rounded w-[220px]':'outline bg-zinc-700  text-md p-1 rounded w-[220px]'}  placeholder='@mail.com' />
    <p className='text-sm hidden text-red-600 '>show Error</p>
    <div className='  text-[17px] mt-1 '>Password<sup className='text-[17px] text-red-600'>*</sup></div>
    <input type="password" onChange={(e)=>{
     setpassword(e.target.value);}} required className={theme==='bright'?'outline bg-zinc-100 block text-md p-1 rounded w-[220px]':'outline block bg-zinc-700  text-md p-1 rounded w-[220px]'}  />
    <p className='text-sm hidden text-red-600 '>show Error</p>
    
    <button className='mt-3 btn text-[18px] w-full  bg-blue-800' >Submit</button>
    <p className='text-sm mt-1 font-bold'>Already have an Account ? {   }
      <NavLink to='/user' className='text-blue-600 underline text-[16px]'>Login</NavLink>
    </p>
    </form>
   </div>
</div>
 </div>









   </>
  )
}

export default Poster