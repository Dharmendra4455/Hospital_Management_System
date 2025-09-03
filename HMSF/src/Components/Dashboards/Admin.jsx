import React, { useEffect,useState } from 'react'
import DashNavbar from './DashNavbar'
import { Navigate, NavLink } from 'react-router-dom'
import Welcomebox from './Welcomebox'
import axios from 'axios'

const Admin = () => {
  const [data2,setdata2]=useState() //to store other data
  const data = localStorage.getItem('loggedperson')
  const person = localStorage.getItem('person')    // to protect route when any login to admin and shift to user
  const admindata = JSON.parse(data)
 

  const otherdatahandler=async()=>{
    await axios.get('http://localhost:4000/admin/otherdata')
      .then(res=>{
        if(res.data)
          setdata2(res.data)
      })
  }
useEffect(()=>{
otherdatahandler()
},[]) 

  return (
    <>
      {admindata && person === 'admin' ?                   //to protect route- if admin login then its data came into data2 var and allow to login otherwise Navigate to Home(/) Route
        
        <div className="body">
          <DashNavbar user={'Admin'} data={admindata} />
          <Welcomebox />
          <div className="cards ml-2 mr-2 flex justify-evenly flex-wrap">

           <div className="card1 h-28 w-48 mt-2 bg-red-600 rounded"   >
              <div className="appoint flex flex-col items-center gap-3">
                <h1 className='text-center text-xl font-semibold pt-1'>Total Appointments</h1>
                  <h1 className='text-center text-4xl font-semibold '>{data2?.appointmentdata?.length}</h1>
              </div>

            </div>
            <div className="card2 h-28 w-48 mt-2 bg-green-500 rounded" >
              <div className="appoint flex flex-col items-center gap-3">
                <h1 className='text-center text-xl font-semibold pt-1'>Total Users</h1>
                 <h1 className='text-center text-4xl font-semibold '>{data2?.Userdata?.length}</h1>
              </div>
            </div>
            <div className="card3 h-28 w-48 mt-2 bg-blue-600 rounded"  >
              <div className="appoint flex flex-col items-center gap-3">
                <h1 className='text-center text-xl font-semibold pt-1'>Total Doctors</h1>
                 <h1 className='text-center text-4xl font-semibold '>{data2?.doctordata?.length}</h1>
              </div>
            </div>
            <div className="card4 h-28 w-48 mt-2 bg-yellow-400 rounded">

            </div>
            {/* <div className="card5 h-28 w-48 bg-violet-700 rounded"></div> */}

          </div>

          <h1 className=' text-xl ml-2 mt-10 font-semibold inline-block text-red-600'>Appointments</h1>
          <div className="overflow-x-auto border-red-600 border-2 m-2">
            <table className="table table-xs text-black">
              <thead className='text-black'>
                <tr>
                  <th></th>
                  <th>Name</th>
                  {/* <th>age</th> */}
                  <th>Date</th>
                  <th>Department</th>
                  <th>gender</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>State</th>
                  <th>Doctor</th>
                  <th>Status</th>
                  <th>Alloted Date</th>
                  <th>Alloted Time</th>
                </tr>
              </thead>
              <tbody>
                {data2?.appointmentdata?.map((item, id) => {
                  return (<tr key={id}>
                    <th>{id + 1}</th>
                    <td>{item.firstname+" "+item.lastname}</td>
                    {/* <td>{data2.Userdata.findOne({item.email}).dateofbirth}</td> */}
                    <td>{item.appointmentdate}</td>
                    <td>{item.department}</td>
                    <td>{item.gender}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>{item.state}</td>
                    <td>{item.doctor}</td>
                    <td>{item.status}</td>
                    <td>{item.alloteddate}</td>
                    <td>{item.allotedtime}</td>
                  </tr>)
                })}

              </tbody>

            </table>
          </div>


          {/* Doctors chart */}

          {/* Dharmendrapateladmin123@gmail.com */}

          <h1 className='text-blue-600 text-xl ml-2  font-semibold inline-block mt-10'>Doctors</h1>

          <div className="overflow-x-auto border-blue-600 border-2 m-2 ">
            <table className="table table-xs text-black">
              <thead className='text-black'>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>gender</th>
                  <th>DOB</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Salary</th>
                  <th>Account created</th>
                  <th>Last Update</th>
                 <th>Email</th>

                </tr>
              </thead>
              <tbody>
                {data2?.doctordata?.map((item, id) => {
                  return (<tr key={id}>
                    <th>{id + 1}</th>
                    <td>Dr. {item.firstname+" "+item.lastname}</td>
                    <td>{item.department}</td>
                    <td>{item.gender}</td>
                    <td>{item.Dateofbirth}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>{item.salary}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                    <td>{item.email}</td>
                  </tr>)
                })}

              </tbody>

            </table>
          </div>

           <h1 className='text-green-500 text-xl ml-2  font-semibold inline-block mt-10'>Users</h1>

          <div className="overflow-x-auto border-green-500 border-2 m-2">
            <table className="table table-xs text-black">
              <thead className='text-black'>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Contact</th>
                  <th>Account created</th>
                  
                </tr>
              </thead>
              <tbody>
                {data2?.Userdata?.map((item, id) => {
                  return (<tr key={id}>
                    <th>{id + 1}</th>
                    <td>{item.firstname+" "+item.lastname}</td>
                    <td>{item.Dateofbirth}</td>
                    <td>{item.email}</td>
                    <td>{item.createdAt}</td>
                   
                  </tr>)
                })}

              </tbody>

            </table>
          </div>


        </div>

        : <Navigate to='/' />}
    </>
   
  )
}

export default Admin