import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Forgetpassword = (props) => {
  useEffect(()=>{
    document.getElementById('my_modal_3').showModal()
  },[])
    return (
   <>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="bg-white p-5 rounded relative">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
     <NavLink to={'/'+ props.user.toLowerCase()}>
     <button className="btn btn-sm bg-white btn-ghost absolute right-[2%] top-[2%] text-black">✕</button>
     </NavLink>
    </form>
   <div className="container  text-black">
   <h3 className="font-bold text-lg mb-10 ml-[40px]">Forget password</h3>
    <div className='mb-1  text-[17px]'>First Name</div>
    <input type="text" className='outline bg-white  text-md w-[220px] p-1 rounded' placeholder='first name' />
    <p className='text-sm hidden text-red-600 '>show Error</p>
    <div className='  text-[17px]'>DOB</div>
    <input type="date" className='outline block bg-white text-md w-[220px] p-1 rounded' />
    <div className='  text-[17px]'>Email</div>
    <input type="email" placeholder='used email' className='outline block bg-white text-md w-[220px] p-1 rounded' />
    
    {/* <p className='text-sm hidden text-red-600 '></p> */}
    
    <button className='mt-3 btn text-[18px] w-full  bg-blue-800 '>Submit</button>
   </div>
   
  </div>
</dialog>
   </>
  )
}

export default Forgetpassword