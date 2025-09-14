import React, { useEffect, useState } from 'react'
import DashNavbar from './DashNavbar'
import { Navigate, NavLink } from 'react-router-dom'
import Welcomebox from './Welcomebox'
import axios from 'axios'

import { MdCall, MdEmail, MdEventAvailable, MdLocationPin, MdOutlineAccessTimeFilled, MdOutlineAttachMoney } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FcDepartment } from "react-icons/fc";
import { FaHandshake } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";
import { TbLivePhoto } from "react-icons/tb";
const Admin = () => {
  const [data2, setdata2] = useState() //to store other data
  const [selectedprsondata, setselectedperson] = useState()
  const data = localStorage.getItem('loggedperson')
  const person = localStorage.getItem('person')    // to protect route when any login to admin and shift to user
  const admindata = JSON.parse(data)
  const otherdatahandler = async () => {
    await axios.get('http://localhost:4000/admin/otherdata')
      .then(res => {
        if (res.data)
          setdata2(res.data)
      })
  }
  useEffect(() => {
    otherdatahandler()
  }, [])
  console.log(selectedprsondata);

  const profileshowhandler = (item) => {
    setselectedperson(item)
    document.getElementById('my_modal_2').showModal()
  }
  const modalClosehandler = () => {
    document.getElementById('my_modal_2').close()
  }

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
                    <td>{item.firstname + " " + item.lastname}</td>
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
          {/* profile model */}
          <dialog id="my_modal_2" className="modal">
            <div className={selectedprsondata?.Availability?"modal-box bg-green-400 w-[425px]":"modal-box bg-red-400 w-[425px]"}>
              <div className="avatar flex justify-center  ">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 bg-gray-700">
                  {selectedprsondata?.photo ? <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    : <h1 className='text-5xl font-bold text-black text-center pt-5'>{selectedprsondata?.firstname.slice(0, 1)}</h1>}
                </div>
              </div>
              <h3 className="font-bold text-lg text-center mt-2">{selectedprsondata?.firstname + " " + selectedprsondata?.lastname} </h3>
              <div className="details ml-4 mt-3 flex flex-col gap-y-3 text-black">
                <div className="gender_dob flex gap-20">

                  <div className="gnder flex gap-2 items-center w-36 ">
                    <div className="icon text-gray-200 text-2xl">{selectedprsondata?.gender == 'FEMALE' ? <BsGenderFemale /> : <BsGenderMale />}</div>
                    <div className='text-md'>{selectedprsondata?.gender}</div>
                  </div>
                  <div className="dob flex gap-2 items-center w-36 ">
                    <div className="icon text-gray-200 text-2xl"><LiaBirthdayCakeSolid /></div>
                    <div className='text-md'>{selectedprsondata?.dob}</div>
                  </div>
                </div>

                <div className="mail flex gap-2 items-center ">
                  <div className="icon text-gray-200 text-2xl"> < MdEmail /></div>
                  <div className='text-md'>{selectedprsondata?.email}</div>
                </div>
                <div className="call flex gap-2 items-center ">
                  <div className="icon text-gray-200 text-2xl"><MdCall /></div>
                  <div className='text-md'>{selectedprsondata?.contact}</div>
                </div>
              
               <div className="dept_salary flex gap-20">

                <div className="dept flex gap-2 items-center w-36 ">
                  <div className="icon text-gray-200 text-2xl"><FcDepartment /></div>
                  <div className='text-md'>{selectedprsondata?.department}</div>
                </div>
                <div className="salary flex gap-2 items-center w-36 ">
                  <div className="icon text-gray-200 text-2xl"><MdOutlineAttachMoney /></div>
                  <div className='text-md'>{selectedprsondata?.salary}</div>
                </div>
              </div>
              <div className="address flex gap-2 items-center ">
                  <div className="icon text-gray-200 text-2xl"><MdLocationPin/></div>
                  <div className='text-md'>{selectedprsondata?.address+" "+selectedprsondata?.city+" "+selectedprsondata?.state}</div>
                </div>
                  <div className="routin flex gap-20">

                <div className="day flex gap-2 items-center w-36">
                  <div className="icon text-gray-200 text-2xl"><MdEventAvailable /></div>
                  <div className='text-md'>{selectedprsondata?.Availabledayfrom.slice(0,3)+"-"+selectedprsondata?.Availabledayto.slice(0,3)}</div>
                </div>
                <div className="time flex gap-2 items-center w-36">
                  <div className="icon text-gray-200 text-2xl"><MdOutlineAccessTimeFilled /></div>
                  <div className='text-md'>{selectedprsondata?.Availabletimefrom+"-"+selectedprsondata?.Availabletimeto}</div>
                </div>
              </div>
                 <div className="joining_availability flex gap-20">
              <div className="joining flex gap-2 items-center w-36">
                  <div className="icon text-gray-200 text-2xl"><FaHandshake /></div>
                  <div className='text-md'>{new Date(selectedprsondata?.createdAt).toLocaleDateString()}</div>
                </div>
              <div className="isavailable flex gap-2 items-center w-36">
                  <div className="icon text-gray-200 text-2xl">{selectedprsondata?.Availability?<TbLivePhoto />:<CgUnavailable />}</div>
                  <div className='text-md'>{selectedprsondata?.Availability?"Available":"Unavailable"}</div>
                </div>
                </div>
              </div>
              <div className="flex justify-center  ">
                <button className="btn" onClick={modalClosehandler}>Close</button>
              </div>
            </div>
          </dialog>
          {/* Doctors chart */}
          {/* Dharmendrapateladmin123@gmail.com */}

          <h1 className='text-blue-600 text-xl ml-2  font-semibold inline-block mt-10'>Doctors</h1>

          <div className="overflow-x-auto border-blue-600 border-2 m-2 ">
            <table className="table table-xs text-black">
              <thead className='text-black'>
                <tr className='border-1 border-black '>
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
                  return (<tr className='border-1 border-black rounded' key={id}

                  >
                    <th>{id + 1}</th>
                    <td className='hover:text-blue-800 cursor-pointer'
                      onClick={() => profileshowhandler(item)}
                    >Dr. {item.firstname + " " + item.lastname}
                    </td>
                    <td>{item.department}</td>
                    <td>{item.gender}</td>
                    <td>{item.dob}</td>
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
                    <td>{item.firstname + " " + item.lastname}</td>
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