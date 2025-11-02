
import React, { useEffect } from 'react'
import DashNavbar from './DashNavbar'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import Welcomebox from './Welcomebox'
import SimpleAreaChart from '../Charts/SimpleAreaChart'
import DashedLineChart from '../Charts/DashedLineChart'
import BiaxialLineChart from '../Charts/BiaxialLineChart'
import ColorCustomization from '../Charts/ColorCustomization'
import axios from 'axios'
import { BsFillArrowLeftSquareFill, BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import { MdCall, MdEmail, MdEventAvailable, MdLocationPin, MdModeEditOutline } from 'react-icons/md'
import { IoMdStarOutline } from "react-icons/io";
import { TbLivePhoto } from 'react-icons/tb'
import { SiTask } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { GrStatusCritical } from "react-icons/gr";
import { useRef } from 'react'



const Doctor = () => {
  const [status, setstatus] = useState("pending")
  const [healthrate, sethealthrate] = useState("")
  console.log(healthrate)
  const [description, setdescription] = useState("")
  const [selectedprsondata, setselectedperson] = useState()
  const [data3, setdata3] = useState() //to store other data
  const data = localStorage.getItem('loggedperson')
  const person = localStorage.getItem('person')    // to protect route when any login to admin and shift to user
  const SelectedappointmentUpdate = useRef([])
  //  console.log(SelectedappointmentUpdate.current)
  const data2 = JSON.parse(data)
console.log(data3)
  const otherdatahandler = async () => {

    await axios.get('http://localhost:4000/doctor/appointmentdata')
      .then(res => {
        if (res.data)
          setdata3(res.data)
        //  console.log(data3)
       
      })
  }
  useEffect(() => {
    otherdatahandler()
  }, [])
 
  // dharmendrapatel123@gmail.com

  const Updateshowhandler = (item) => {
    setstatus('pending')    //only used to manage bg color and rating selection of selected profile
    setselectedperson(item)
    if(item.update.length > 0)
   SelectedappointmentUpdate.current=([...item.update])
    console.log(SelectedappointmentUpdate.current)
    // console.log(selectedprsondata?.firstname?.slice(0, 1))
    document.getElementById('my_modal_2').showModal()
  }
  const modalClosehandler = () => {
    document.getElementById('my_modal_2').close()
  }
  const currentdate = new Date().toLocaleDateString()

  const StatusUpdatehandler=async(data)=>{
    const _id =data._id
    const statusdata={status,description,healthrate} 
    if(status && healthrate)
    SelectedappointmentUpdate.current=([...SelectedappointmentUpdate.current ,{status,description,healthrate}])
    else{
      toast.error("Missing details!!")
      return
    }
    console.log(SelectedappointmentUpdate.current)
    try{
      const res = await axios.post('http://localhost:4000/doctor/appointmentstatus',{data:SelectedappointmentUpdate.current,id:_id})
      if(res)
        toast.success(res.data.message)
       otherdatahandler() // to refresh status
    }
    catch(err){
      if(err.response)
        toast.error(err.response.data.message)
    } 
   modalClosehandler()
  }
  return (
    <>
      {data2 && person === 'doctor' ?
        <div>

          {/* Update modal */}
          <dialog id="my_modal_2" className="modal">

            <div className={status === 'Discharged' ? "modal-box bg-green-700 w-[425px]" :
              status === 'Progress' ? "modal-box bg-yellow-400 w-[425px]" :
               status === 'Good' ? "modal-box bg-green-400 w-[425px]" :
                "modal-box bg-red-400 w-[425px]"}>
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

                <div className="address flex gap-2 items-center ">
                  <div className="icon text-gray-200 text-2xl"><MdLocationPin /></div>
                  <div className='text-md'>{selectedprsondata?.address + " " + selectedprsondata?.city + " " + selectedprsondata?.state}</div>
                </div>

                <div className="joining_availability flex gap-20">
                  <div className="joining flex gap-2 items-center w-36">
                    <div className="icon text-gray-200 text-2xl"><MdEventAvailable /></div>
                    <div className='text-md'>{currentdate}</div>
                  </div>
                  <div className="isavailable flex gap-2 items-center w-36">
                    <div className="icon text-gray-200 text-2xl">{<TbLivePhoto />}</div>
                    <div className='text-md'>
                      <select onChange={(e) => setstatus(e.target.value)}>

                        <option value="pending">Select one</option>
                        <option className='bg-red-600' value="Critical">Critical</option>
                        <option className='bg-yellow-500' value="Progress">Progress</option>
                        <option className='bg-green-500' value="Good">Good</option>
                        <option className='bg-green-700' value="Discharged">Discharged</option>

                      </select>
                    </div>
                  </div>
                </div>

                <div className="gender_dob flex gap-20">

                  <div className="gnder flex gap-2 items-center w-32 ">
                    <div className="icon text-gray-200 text-2xl">{<IoMdStarOutline />}</div>
                    <div className='text-md'>
                      {status !== 'pending' ? <select onChange={(e) =>sethealthrate(e.target.value)} value={healthrate}>
                        <option value="" className='bg-white'>Select one</option>
                        <option value="0" className='bg-red-600'disabled={status!=='Critical'?true:false}>0  Critical</option>
                        <option value="1" className='bg-red-500'disabled={status!=='Critical'?true:false}>1  Critical</option>
                        <option value="2" className='bg-yellow-600'disabled={status!=='Progress'?true:false}>2  going Progress</option>
                        <option value="3" className='bg-yellow-400'disabled={status!=='Progress'?true:false}>3  Progress</option>
                        <option value="4" className='bg-green-400'disabled={status!=='Good'?true:false}>4  good</option>
                        <option value="5" className='bg-green-600'disabled={status!=='Discharged'?true:false}>5  Normal</option>
                        <option value="6" className='bg-green-400'disabled={status!=='Good'?true:false}>6  good</option>
                        <option value="7" className='bg-yellow-700' disabled={status!=='Critical'?true:false}>7  going Critical</option>
                        <option value="8" className='bg-red-500' disabled={status!=='Critical'?true:false}> 8 Critical</option>
                        <option value="9" className='bg-red-600' disabled={status!=='Critical'?true:false}>9 Critical</option>
                      </select> : ""}
                    </div>
                  </div>
                  <div >
                    <textarea placeholder='Description' className="w-36 h-20 bg-white" type='text'  onChange={(e)=>{setdescription(e.target.value)}}/>
                    
                  </div>
                </div>
                <div className="flex justify-center ">
                  <button className="btn mr-5" onClick={()=>StatusUpdatehandler(selectedprsondata)} >Update</button>
                  <button className="btn ml-5" onClick={modalClosehandler}>Cancel</button>
                </div>
              </div>
            </div>
          </dialog>

          <DashNavbar user={"doctor"} data={data2} />
          <Welcomebox />

          <div className="cards ml-2 mr-2 flex justify-evenly flex-wrap">

            <div className="card1 h-28 w-48 mt-2 bg-blue-600 rounded"   >
            
              <h1 className='text-center text-xl font-semibold'>Total Appointments</h1>
              <div className="datacount flex justify-evenly mt-5 text-3xl gap-5">
                 <div className='text-black'> <SiTask/></div>
                  <h1 className='font-semibold text-black'>12</h1>
              </div>
            </div>
            <div className="card2 h-28 w-48 mt-2 bg-yellow-500 rounded" >
              <h1 className='text-center text-xl font-semibold'>Progress</h1>
              <div className="progresscount flex justify-evenly mt-5 text-3xl">
               <div className='text-black'>   <GiProgression /></div>
                  <h1 className='font-semibold text-black'>2</h1>
              </div>
            </div>
            <div className="card3 h-28 w-48 mt-2 bg-red-600 rounded" >
              <h1 className='text-center text-xl font-semibold'>Critical</h1>
              <div className="dischargecount flex justify-evenly mt-5 text-3xl">
              
                 <div className='text-black'><GrStatusCritical /></div>
                  <h1 className='font-semibold text-black'>1</h1>
              
              </div>
            </div>
            <div className="card4 h-28 w-48 mt-2 bg-green-500 rounded">
              <h1 className='text-center text-xl font-semibold'>Discharge</h1>
              <div className="dischargecount flex justify-evenly mt-5 text-3xl">
              
                 <div className='text-black'> <MdHome /></div>
                  <h1 className='font-semibold text-black'>2</h1>
                
              </div>
            </div>
            {/* <div className="card5 h-28 w-48 bg-violet-700 rounded"></div> */}

          </div>

          <div className="appointments">


            <h1 className=' text-xl ml-2 mt-10 font-semibold inline-block text-red-600'>Appointments</h1>
            <div className="appintmentchart_container flex justify-between">
              <div className="overflow-x-auto border-black border-2 m-2 w-full">
                <table className="table table-lg  text-black">
                  <thead className='text-black'>
                    <tr className='border-black border-2'>
                      <th></th>
                      <th>Name</th>
                      {/* <th>age</th> */}
                      <th>Date</th>
                      <th>Department</th>
                      <th>gender</th>
                      <th>Status</th>
                      <th>Update</th>
                      <th>Status Graph</th>

                    </tr>
                  </thead>
                  <tbody className='font-semibold'>
                    {data3?.map((item, id) => {
                      return (<tr className={'border-black border-2'} key={id}>
                        <th>{id + 1}</th>
                        <td>{item.firstname + " " + item.lastname}</td>
                        {/* <td>{data2.Userdata.findOne({item.email}).dateofbirth}</td> */}
                        <td>{item.appointmentdate}</td>
                        <td>{item.department}</td>
                        <td>{item.gender}</td>
                        <td className={item.status=='Pending'?"text-red-600":
                          item.status=='Critical'?"text-red-600":
                          item.status=='Good'?"text-green-400":
                          item.status=='Progress'?"text-yellow-500":
                          "text-green-700"
                        }
                        >{item.status}</td>
                        <td className='text-blue-600 cursor-pointer hover:text-blue-700'
                          onClick={() => Updateshowhandler(item)}
                        > <MdModeEditOutline/>Update</td>
                         <div className='bg-white '> 
                          <ColorCustomization 
                           data={item}
                         />
                         </div>
                      </tr>)
                    })}

                  </tbody>

                </table>
              </div>
            </div>

          </div>
          {/* <SimpleAreaChart />
          <DashedLineChart />
          <BiaxialLineChart /> */}
          
          {/* <ColorCustomization /> */}
        </div>
        : ""}
    </>
  )
}

export default Doctor
