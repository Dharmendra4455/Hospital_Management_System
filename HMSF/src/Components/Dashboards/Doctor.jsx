import React from 'react'
import DashNavbar from './DashNavbar'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {toast} from 'react-toastify'
import Welcomebox from './Welcomebox'

const Doctor = () => {

const[status,setstatus]=useState("")
  const data=localStorage.getItem('loggedperson')
  const person=localStorage.getItem('person')    // to protect route when any login to admin and shift to user
  const data2=JSON.parse(data)
  
  const statusupdatehandler=()=>{
    document.getElementById('my_modal_3').showModal()
  }
  const closehandler=()=>{
    document.getElementById('my_modal_3').close()
  }
 

  return (
   <>
   {data2 && person==='doctor'? 
   <div>
     <DashNavbar user={"doctor"} data={data2}/>
    <Welcomebox/>
      
  <div className="cards ml-2 mr-2 flex justify-evenly flex-wrap">

  <div className="card1 h-28 w-48 mt-2 bg-yellow-900 rounded"   >
  <h1 className='text-center text-xl font-semibold'>Total Appointments</h1>


  </div>
  <div className="card2 h-28 w-48 mt-2 bg-red-600 rounded" >
  <h1 className='text-center text-xl font-semibold'>Pending</h1>
  </div>
  <div className="card3 h-28 w-48 mt-2 bg-blue-600 rounded"  >
  <h1 className='text-center text-xl font-semibold'>Alloted</h1>
  </div>
  <div className="card4 h-28 w-48 mt-2 bg-green-500 rounded">
   <h1 className='text-center text-xl font-semibold'>Discharge</h1>
  </div>
  {/* <div className="card5 h-28 w-48 bg-violet-700 rounded"></div> */}
  
  </div>
   
   <div className="appointments">


     <h1 className=' text-black text-xl ml-2 mt-2 font-semibold'>Appointment</h1>
  <div className="appointmentStatus ml-2 flex justify-center h-44 w-[530px] mt-2 overflow-scroll">
  <table className='text-black'>
    <thead className='absolute'>
    <tr className='sticky top-0 bg-white w-[530px]'>
    <th className='border-2 pl-3 pr-[33px] pt-1 pb-1 border-x-black'>Patient</th>
    <th className='border-2 pl-3 pr-[71px] pt-1 pb-1 border-x-black'> Date</th>
    <th className='border-2 pl-3 pr-[11px] pt-1 pb-1 border-x-black'>Department</th>
    <th className='border-2 pl-3 pr-[21px] pt-1 pb-1 border-x-black'>Doctor</th>
    <th className='border-2 pl-3 pr-[24px] pt-1 pb-1 border-x-black'>Status</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Ram Singh</td>
    <td className='border-2 pl-3 pr-[24px] pt-1 pb-1 border-x-black'>02/12/2004</td>
    <td className='border-2 pl-3 pr-[28px] pt-1 pb-1 border-x-black'>Neurology</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Dr.Smith</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Pending</td>  
    </tr>
    <tr>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Ram Singh</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>02/12/2004</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Neurology</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Dr.Smith</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Pending</td>  
    </tr>
    <tr>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Ram Singh</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>02/12/2004</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Neurology</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Dr.Smith</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Pending</td>  
    </tr>
    <tr>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Ram Singh</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>02/12/2004</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Neurology</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Dr.Smith</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Pending</td>  
    </tr>
    <tr>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Ram Singh</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>02/12/2004</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Neurology</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Dr.Smith</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Pending</td>  
    </tr>
    <tr>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Ram Singh</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>02/12/2004</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Neurology</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black'>Dr.Smith</td>
    <td className='border-2 pl-3 pr-3 pt-1 pb-1 border-x-black border-black text-blue-600 cursor-pointer' onClick={statusupdatehandler}>Pending</td>  
   
    <dialog id="my_modal_3" className="modal">
      <div className="bg-white p-5 rounded relative">
        <form method="dialog" >
          {/* if there is a button in form, it will close the modal */}
        
         <button onClick={closehandler} className="btn btn-sm bg-white btn-ghost absolute right-[2%] top-[2%] text-black">✕</button>
        
        </form>
       <div className="container  text-black pl-2 pr-2">
       <h3 className="font-bold text-lg mb-10 mr-[30px] ml-[30px]">Update Status</h3>
       <form action=''>
        <div className='mb-1  text-[17px]'>Name: Patient Name</div>
  
        <div className='  text-[17px]'>Date: appointment date</div>
        <select onChange={(e)=>setstatus(e.target.value)}> 

          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="alloted">Alloted</option>
          <option value="discharge">Discharge</option>
        </select>
       {status=="alloted"||status=='discharge'?<h4>Enter Date</h4>:""}
       {status=="alloted"||status=='discharge'?<input type="date" className='bg-gray-200' />:""}
       <button className='mt-3 btn text-[18px] w-full  bg-blue-800'>Save</button>
       </form>
       </div>
       </div>
       </dialog>
       



    </tr>
    </tbody>
  </table>
  </div>
   </div>
 </div> 
  :""}
   </>
  )
}

export default Doctor