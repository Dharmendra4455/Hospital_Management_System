import React, { useEffect, useRef, useState } from 'react'
import DashNavbar from './DashNavbar'
import { Navigate, NavLink } from 'react-router-dom'
import Welcomebox from './Welcomebox'
import axios from 'axios'
import { MdCall, MdEdit, MdEmail, MdEventAvailable, MdLocationPin, MdOutlineAccessTimeFilled, MdOutlineAttachMoney } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FcDepartment } from "react-icons/fc";
import { FaHandshake, FaUserDoctor, FaUserGroup } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";
import { TbLivePhoto } from "react-icons/tb";
import Chart from '../Charts/Chart'
import DonutChart from '../Charts/DonutChart'
import BarChartHorizontal from '../Charts/BarChartHorizontal'
import PieChartWithCenterLabel from '../Charts/PieCenterLabel'
import ArcDesign from '../Charts/ArcDesign'
import MinBarSize from '../Charts/MinBarSize'
import { SiTask } from 'react-icons/si'
import { appointment } from '../../../../HMSB/Models/Schema'
import { toast } from 'react-toastify'
const Admin = () => {
  const [data2, setdata2] = useState() //to store other data
  const [selectedprsondata, setselectedperson] = useState()
  const [Selectedappointment, setselectedappointment] = useState()
  const [Selecteddoc_id, setselecteddoc_id] = useState()
  const [showallocationformModal, setshowallocationformmodel] = useState(false)
  const [updatecheckbox, setupdatecheckbox] = useState(false)
  const appointmentallocationform = useRef({
    allocateddoctor_id:'',
    alloteddoctor:'',
    allocateddate:'',
    allocatedtime:'',
    appointmentid:''
  })
  // console.log(appointmentallocationform)
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
  const profileshowhandler = (item) => {
    setselectedperson(item)
    document.getElementById('my_modal_2').showModal()
  }
  const modalClosehandler = () => {
    document.getElementById('my_modal_2').close()
  }
const currentdate=new Date().toLocaleDateString()
const sorteduserdata=  data2?.Userdata?.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
 const today = new Date() //today date obj
  const currentyyyy = new Date().getFullYear()
  const currentmm = (new Date().getMonth() + 1) < 10 ? "0" + new Date().getMonth() + 1 : new Date().getMonth() + 1  //adding prefix 0 with less than 10 no.s
  const currentdd = new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate()


 const Doctorallocationformhandler =async()=>{
//  console.log(appointmentallocationform.current)
  if(appointmentallocationform.current.allocateddate && appointmentallocationform.current.allocatedtime && appointmentallocationform.current.allocateddoctor_id && appointmentallocationform.current.appointmentid && appointmentallocationform.current.alloteddoctor)
 {   if(!confirm("Are yor Sure?? Once modify it will not change again .")) return
    try{
    const res = await axios.post('http://localhost:4000/admin/appointmentupdate',appointmentallocationform.current)
     toast.success(res.data.message)
     setshowallocationformmodel(false)
     setselecteddoc_id("")
     appointmentallocationform.current=({
    allocateddoctor_id:'',
    alloteddoctor:'',
    allocateddate:'',
    allocatedtime:'',
    appointmentid:''
  })
     otherdatahandler() //to refresh dashboard
  }  
 catch(err){
  toast.error(err.response.data.message)
 }
}
else{
  toast.error("Missing details !!")
  return
}
}
const getDocName=(id)=>{
     const selected_Doc= data2?.doctordata.find((item)=>item._id ===id)
     const docName =(selected_Doc.firstname+" "+selected_Doc.lastname)
     appointmentallocationform.current=({...appointmentallocationform.current,alloteddoctor :selected_Doc.firstname+" "+selected_Doc.lastname})
}
  return (
    <>
      {admindata && person === 'admin' ?                   //to protect route- if admin login then its data came into data2 var and allow to login otherwise Navigate to Home(/) Route

        <div className="body">
          <DashNavbar 
          user={'Admin'}
          data={admindata} 
          alldata={data2}
          refresh_Doclist={()=>otherdatahandler()}

          />
          <Welcomebox />
          <div className="cards ml-2 mr-2 flex justify-evenly flex-wrap">

            <div className="card1 h-28 w-48 mt-2 bg-red-600 rounded"   >
              <div className="appoint flex flex-col items-center gap-3">
                <h1 className='text-center text-xl font-semibold pt-1'>Total Appointments</h1>
                <div className="datacount flex  mt-3 gap-7  ">
                  <div className='text-black text-4xl'> <SiTask/></div>
                    <h1 className='font-semibold text-black text-4xl'>{data2?.appointmentdata?.length}</h1>
                </div>
               {/* <h1 className='text-center text-4xl font-semibold '>{data2?.appointmentdata?.length}</h1> */}
              </div>

            </div>
            <div className="card2 h-28 w-48 mt-2 bg-green-500 rounded" >
              <div className="appoint flex flex-col items-center gap-3">
                <h1 className='text-center text-xl font-semibold pt-1'>Total Users</h1>
                <div className="datacount flex  mt-3 gap-7  ">
                  <div className='text-black text-4xl'> <FaUserGroup/> </div>
                    <h1 className='font-semibold text-black text-4xl'>{data2?.Userdata?.length}</h1>
                </div>
                {/* <h1 className='text-center text-4xl font-semibold '>{data2?.Userdata?.length}</h1> */}
              </div>
            </div>
            <div className="card3 h-28 w-48 mt-2 bg-blue-600 rounded"  >
              <div className="appoint flex flex-col items-center gap-3">
                <h1 className='text-center text-xl font-semibold pt-1'>Total Doctors</h1>
                <div className="datacount flex  mt-3 gap-7  ">
                  <div className='text-black text-4xl'> <FaUserDoctor /></div>
                    <h1 className='font-semibold text-black text-4xl'>{data2?.doctordata?.length}</h1>
                </div>
                {/* <h1 className='text-center text-4xl font-semibold '>{data2?.doctordata?.length}</h1> */}
              </div>
            </div>
            {/* <div className="card4 h-28 w-48 mt-2 bg-yellow-400 rounded">

            </div> */}
            {/* <div className="card5 h-28 w-48 bg-violet-700 rounded"></div> */}

          </div>

          <h1 className=' text-xl ml-2 mt-10 font-semibold inline-block text-red-600'>Appointments</h1>
          <div className="appintmentchart_container flex justify-between">
          <div className="appointmentTable overflow-x-auto m-2 h-fit max-h-72 w-full">
            <table className="table table-xs  text-black">
              <thead className='text-black'>
                <tr className='border-1 border-black font-bold'>
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
                  <th>Update</th>

                </tr>
              </thead>
              <tbody className='font-bold border-1 border-black '>
                {data2?.appointmentdata?.map((item, id) => {
                  return (
                  <tr className={ item.alloteddate !='null' ? ' border-1 border-black bg-white':' border-1 border-black bg-zinc-400'} key={id}>
                    <th>{id + 1}</th>
                    <td>{item.firstname + " " + item.lastname}</td>
                    {/* <td>{data2.Userdata.findOne({item.email}).dateofbirth}</td> */}
                    <td>{item.appointmentdate}</td>
                    <td>{item.department}</td>
                    <td>{item.gender}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>{item.state}</td>
                    <td> {item.doctor}</td>
                    <td
                    className={item.status ==='Pending' ? 'text-yellow-400' :
                       item.status === 'Discharged' ? 'text-green-700':
                       item.status === 'Good' ?'text-green-400' :
                       'text-red-600' }
                    >{item.status}</td>
                    <td>
                      {item.alloteddate}
                      {/* <input  type="date" value={alloteddate ? alloteddate : item.alloteddate ? item.alloteddate :""}  onChange={(e)=>setalloteddate(e.target.value)}/> */}
                    </td>
                    <td>{item.allotedtime}</td>
                    <td className={item.doctor ? 'text-2xl pointer-events-none text-zinc-600':'text-md  hover:text-blue-800 hover: cursor-pointer text-2xl text-blue-700'} onClick={()=>{setshowallocationformmodel(true);setselectedappointment(item)}}><MdEdit /></td>
                  </tr>)
                })}

              </tbody>

            </table>
          </div>
    

          <div className="pie  border-1 border-black mt-2 mr-2 hidden sm:block">
            <h1 className='text-black text-center font-semibold '>Total Appointments</h1>
            <PieChartWithCenterLabel
            appointments={data2?.appointmentdata}

            />
          </div>
          
          </div>
            {showallocationformModal && (
        <>
        <div className="allocationModal w-full h-full flex justify-center items-center absolute z-10 top-0 bg-black/80 backdrop-blur-sm">
         
          <div className="contain w-fit h-fit bg-zinc-400 rounded relative ">
            <div className="close text-3xl text-red-600 right-0 top-0 absolute pt-1 pr-4 " onClick={()=>setshowallocationformmodel(false)}>X</div>
           <div className="formsection p-2  text-lg">
            <h1 className='text-2xl text-center font-bold'>Doctor Allocation</h1>
            <div className="name flex justify-around items-center gap-5 mt-10">
              <label className='text-xl'>Doctor:</label>
                      <select
                        className="border-2 border-black outline-0 w-58 py-2 rounded"
                        name="doctor"
                        id="doctor-selec"
                        onChange={(e) =>{appointmentallocationform.current=({...appointmentallocationform.current ,allocateddoctor_id : e.target.value})
                        getDocName(e.target.value) 
                        }}          
                     >
                        {<option value=""  className="bg-zinc-200">
                          Select Doctor
                        </option>}
                        {data2?.doctordata?.map((item2, id) => {
                          if (item2.department === Selectedappointment.department) {
                            return (
                              <option
                                key={id}
                                disabled={!item2.Availability}
                                className={item2.Availability ? "bg-green-500" : "text-black bg-red-600"}
                                value={item2._id}
                              >
                                {item2.firstname + " " + item2.lastname}
                              </option>
                            );
                          }
                        //   else{  
                        //   return ( <option  value=""  className="bg-zinc-200">
                        //  Doctors not found 
                        // </option>);
                        //   }
                           // Return null instead of an empty string for better React practices
                        })}
                      </select>

            </div>
            <div className="allocateddate flex justify-around items-center gap-5 mt-5">
              <label className='text-xl'>Date:</label>
              <input type="date" 
               min={currentyyyy + "-" + currentmm + "-" + currentdd}
              onChange={(e)=>appointmentallocationform.current=({...appointmentallocationform.current,allocateddate:e.target.value })}
              
              className='border-2 pr-2 border-black outline-0 w-58 py-2 rounded'
              />
            </div>
            <div className="allocatedtime flex justify-around items-center gap-5 mt-5">
              <label className='text-xl'>Time:</label>
              <input type="time" 
               onChange={(e)=>appointmentallocationform.current=({...appointmentallocationform.current,allocatedtime:e.target.value ,appointmentid:Selectedappointment._id })}
              className='border-2 pr-2 border-black outline-0 w-58 py-2 rounded'
              />
            </div>
            <button className='mt-2 w-full text-center border-2 bg-blue-600 outline-0 p-1.5 font-bold rounded text-xl hover:bg-blue-700'
            onClick={()=>Doctorallocationformhandler()}
            >Submit
            </button>
           </div>
           
            </div>
        </div>
        </>
      )}

          {/* profile model */}
          <dialog id="my_modal_2" className="modal">
          
            <div className={selectedprsondata?.Availability?"modal-box bg-green-400 w-[425px]":"modal-box bg-red-400 w-[425px]"}>
              <div className="avatar flex justify-center  ">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 bg-gray-700">
                  {selectedprsondata?.photo ? <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    : <h1 className='text-5xl font-bold text-black text-center pt-5'>{selectedprsondata?.firstname.slice(0, 1)}</h1>}
                </div>
              </div>
              <h3 className="font-bold text-lg text-center mt-2">{"Dr. "+selectedprsondata?.firstname + " " + selectedprsondata?.lastname} </h3>
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
         <div className="doctorChart flex justify-end gap-2">
          <div className="overflow-auto ml-2 w-full h-fit max-h-72">
            <table className="table table-sm  text-black ">
              <thead className='text-black'>
                <tr className='border-1 border-black '>
                  
                  <th></th>
                  <th>id</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Availabe Days</th>
                  <th>Timing</th>
                  <th>Status</th>
                  
                </tr>
              </thead>
              <tbody>
                {data2?.doctordata?.map((item, id) => {
                  return (
                  <tr  className={item.Availability?'border-1 border-black rounded bg-green-500 font-bold hover:bg-green-600':'font-bold border-1 border-black rounded bg-red-400 hover:bg-red-500 '} key={id}

                  >
                    <td>{id+1}</td>
                    <td>{item._id}</td>
                    <td  onClick={() => profileshowhandler(item)} className='hover:text-blue-800 hover:cursor-pointer'> Dr. {item.firstname + " " + item.lastname}  </td>
                    <td>{item.department}</td>
                    <td>{item.Availabledayfrom.slice(0,3) +"-"+item.Availabledayto.slice(0,3)}</td>
                    <td>{item.Availabletimefrom +"-"+item.Availabletimeto}</td>
                    <td>{item.Availability?"Available":"Unavailable"}</td>
                   
                   
                  </tr>)
                })}

              </tbody>

            </table>
          </div>
          <div className="pie1 border-1 border-black hidden sm:block">
            <h2 className='text-black text-center font-semibold '>Total Doctors </h2>
            <PieChartWithCenterLabel
            doctors = {data2?.doctordata}
            /></div>
          {/* <div className="pie2 border-1 border-blue-600  mr-2">
            <h2 className='text-black text-center font-semibold '>Availables Doctors</h2>
            <DonutChart/></div> */}
          
          </div>
          <h1 className='text-green-500 text-xl ml-2  font-semibold inline-block mt-10'>Users</h1>
          <div className="Userchart flex  ">
          <div className="overflow-auto w-full m-2 h-fit max-h-[350px] ">
            <table className="table table-sm font-semibold text-black">
              <thead className='text-black'>
                <tr className='border-1 border-black'>
                  <th></th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Contact</th>
                  <th>Account created</th>

                </tr>
              </thead>
              <tbody>
                {data2?.Userdata?.map((item, id) => {
                  const createddate=new Date(item.createdAt).toLocaleDateString()
                  
                  return (
                  <tr className={currentdate===createddate?'bg-green-500 font-bold':"font-bold border-1 border-black"} key={id}>
                    <th>{id + 1}</th>
                    <td>{item.firstname + " " + item.lastname}</td>
                    <td>{item.Dateofbirth}</td>
                    <td>{item.email}</td>
                    <td>{createddate}</td>

                  </tr>)
                })}

              </tbody>

            </table>
          </div>
          <div className="Avgwaitingtim w-xl border-1 border-black mt-2 mr-2 hidden sm:block">
          <h2 className='text-black text-center font-semibold '>Average Waiting Time</h2>
             <BarChartHorizontal/>
          </div>
          
          </div>
{/*          
          <PieChartWithCenterLabel/>
         <ArcDesign/>
         <MinBarSize/>
   */}
        </div>

        : <Navigate to='/' />}
    </>

  )
}

export default Admin
