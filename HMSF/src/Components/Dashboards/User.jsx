import React, { useEffect, useState } from 'react'
import DashNavbar from './DashNavbar';
import { Navigate } from 'react-router-dom';
import Welcomebox from './Welcomebox';
import axios from 'axios';
import PieChartWithCenterLabel from '../Charts/PieCenterLabel';
import BiaxialLineChart from '../Charts/BiaxialLineChart'

const User = () => {
  const[otherdata,setotherdata]=useState()
  const[GraphStatusViewer,setgraphStatusViewer]=useState(false)
  const[GraphStatusdata,setgraphStatusdata]=useState()
  const[SelectedappointmentId,setSelectedAppointmentId]=useState()
  const[AppointmentUpdatedata,setappointmentUpdatedata]=useState()
  const data= localStorage.getItem('loggedperson')
  const person=localStorage.getItem('person')
  const data2=JSON.parse(data)
  
  const gettask =async()=>{
        await axios.get('http://localhost:4000/user/otherdata',{   //getting appointmentdata
      params:{
          email:data2.data.email
      }
     })
      .then(res=>{
        if(res.data)
          setotherdata(res.data)
      })
  }
 useEffect(()=>{
  gettask()// Pending Task 
 
 },[])
const Statusgraphhandler=(item,id)=>{
   setSelectedAppointmentId(id)
   setgraphStatusdata(item)
   setappointmentUpdatedata(item)
   setgraphStatusViewer(true)

}
  // console.log(AppointmentUpdatedata)
  return (
   <>
   {data2===null ||person=='admin'|| person=='doctor'?<Navigate to='/'/>:
  <div onClick={(e)=> e.target.nodeName !=='TD' ? setgraphStatusViewer(false) : ''}>
    <DashNavbar user={"User"}
    appointmentrefresh={()=>gettask()}
    data={data2}/>
   
    <Welcomebox/>
      
     <div className="doc_Chart  flex justify-baseline gap-4 m-2 w-full" >
      <div className='h-52 overflow-auto'>
            <table className="table table-xs text-black ">
              <thead className='text-black  '>
                <tr className='border-1 border-black '>
                  <th></th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>gender</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Appoint Date</th>
                  <th>Doctor Assign</th>
                  <th>Status</th>
                  <th>Allocated Date</th>
                  <th>Allocated time(24h)</th>
                </tr>
              </thead>
              <tbody >
                {otherdata?.appointmentdata?.map((item, id) => {
                  return (
                  <tr key={id} className='font-bold border-1 border-black hover:bg-zinc-300 h-8 ' onClick={()=>Statusgraphhandler(item,id+1)}>
                    <th>{id + 1}</th>
                    <td>{item.firstname+" "+item.lastname}</td>
                    <td>{item.dob}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td>{item.department}</td>
                    <td>{item.appointmentdate}</td>
                    <td>{item.doctor}</td>
                    <td className={item.status === 'Progress' ? 'text-yellow-400' :
                      item.status === 'Discharged' ? 'text-green-700' :
                        item.status === 'Good' ? 'text-green-400' :
                         item.status === 'Critical'? 'text-red-600':"text-blue-700"}
                    >{item.status}</td>

                    <td>{item.alloteddate}</td>
                    <td>{item.allotedtime}</td>
                  </tr>
                  
                )
                })}

              </tbody>

            </table>
          </div>
          

            <div className="chartbox border-2 border-black p-2 h-fit w-fit mr-2">
              {GraphStatusViewer ? <BiaxialLineChart
                data={GraphStatusdata} /> :
                <PieChartWithCenterLabel
                  User={otherdata?.appointmentdata} />}
            </div>
  </div>

   {/* <BiaxialLineChart/> */}


  <h1 className='text-black ml-2  text-2xl font-bold'>Appointsments Update</h1>
   
          <div className="cardbox mt-2 ml-2  grid grid-flow-col  border-black overflow-x-auto">

            {GraphStatusViewer ? AppointmentUpdatedata.update.length > 0 ?
              
                AppointmentUpdatedata.update.map((item, id) => {
                  return (
                    <div key={id} className={                  
                    item.status === 'Progress' ? 'bg-yellow-400 cards h-fit w-68 mr-2 hover:bg-zinc-300 rounded-md' :
                      item.status === 'Discharged' ? 'bg-green-700 cards h-fit w-68 mr-2  hover:bg-zinc-300 rounded-md' :
                        item.status === 'Good' ? 'bg-green-400 cards h-fit w-68 mr-2  hover:bg-zinc-300 rounded-md' :
                        item.status === 'Critical' ?  'bg-red-400 cards h-fit w-68 mr-2  hover:bg-zinc-300 rounded-md':
                         'bg-blue-700 cards h-fit w-68 mr-2  hover:bg-zinc-300 rounded-md'}
                         >
                      <div className="topbar text-black flex font-bold  text-[13px] justify-start gap-4 pl-2 w-full overflow-hidden">
                        <div className="id  ">{SelectedappointmentId}</div>
                        <div className="drname underline ">{AppointmentUpdatedata.firstname+' '+AppointmentUpdatedata.lastname}</div>
                        <div className="date underline">{AppointmentUpdatedata.appointmentdate}</div>
                      </div>
                   
                        <div className=" text-black font-bold mt-2 pt-1.5 pb-1.5 flex justify-between gap-2 border-2 border-zinc-400 rounded-sm text-[14px] mr-1 ml-1 pr-1 pl-1 ">
                        <div>Alloted Doctor :</div>
                        <div className=" text-[13px]  datetime text-center font-bold">
                          <div className="date">{AppointmentUpdatedata.doctor}</div>
                          
                        </div>
                      </div>

                      <div className='text-[13px] font-bold pl-2'>Doctor Description :</div>
                      <div className="description text-black min-h-12 h-auto overflow-hidden w-56 mt-2 ml-2 text-center ">{item.description}</div>
                      <div className=" text-black font-bold mt-2 pt-1.5 pb-1.5 flex justify-between gap-2 border-2 border-zinc-400 rounded-sm text-[14px] mr-1 ml-1 pr-1 pl-1 ">
                        <div>Date:</div>
                        <div className=" text-[13px]  datetime flex justify-end gap-1 font-bold">
                          <div className="date">{item.createdAt.split('T')[0]}</div>
                          <div className="time">{'  '+item.createdAt.split('T')[1]}</div>
                        </div>
                      </div>
                      <div 
                      className={item.status === 'Progress' ? 'text-yellow-400 Statusbob bg-white border-2 border-zinc-400 rounded-sm my-2 mx-1 py-1.5 text-center font-bold' :
                     item.status === 'Discharged' ? 'text-green-700 Statusbob bg-white border-2 border-zinc-400 rounded-sm my-2 mx-1 py-1.5 text-center font-bold' :
                       item.status === 'Good' ? 'text-green-400 Statusbob bg-white border-2 border-zinc-400 rounded-sm my-2 mx-1 py-1.5 text-center font-bold' :
                       item.status === 'Critical' ?'text-red-600 Statusbob bg-white border-2 border-zinc-400 rounded-sm my-2 mx-1 py-1.5 text-center font-bold'
                         :'text-blue-700 Statusbob bg-white border-2 border-zinc-400 rounded-sm my-2 mx-1 py-1.5 text-center font-bold' }>{item.status}</div>
                    </div>
                  )
                })
              : <h1 className='text-2xl text-zinc-500 font-extrabold'>No Updates</h1>
              : ""}
    </div> 
     </div>
   }
   </>
  )
}

export default User;