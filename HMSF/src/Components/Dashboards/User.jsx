import React, { useEffect, useState } from 'react'
import DashNavbar from './DashNavbar';
import { Navigate } from 'react-router-dom';
import Welcomebox from './Welcomebox';
import axios from 'axios';

const User = () => {
  const[otherdata,setotherdata]=useState()
  const data= localStorage.getItem('loggedperson')
  const person=localStorage.getItem('person')
  const data2=JSON.parse(data)

  const gettask =async()=>{
        await axios.get('http://localhost:4000/user/otherdata',{
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
 console.log(otherdata)
  return (
   <>
   {data2===null ||person=='admin'|| person=='doctor'?<Navigate to='/'/>:
  <div>
    <DashNavbar user={"User"} data={data2}/>
   
    <Welcomebox/>
      
<div className="doc_Chart  flex flex-1/2 justify-between m-2">
      <div className="overflow-x-auto border-red-600 border-2 ">
            <table className="table table-xs text-black">
              <thead className='text-black'>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>gender</th>
                  <th>Address</th>
                  <th>email</th>
                </tr>
              </thead>
              {/* <tbody>
                {data2?.appointmentdata?.map((item, id) => {
                  return (<tr key={id}>
                    <th>{id + 1}</th>
                    <td>{item.firstname+" "+item.lastname}</td>
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

              </tbody> */}

            </table>
          </div>
          

    <div className="chartbox border-2 border-black p-4  bg-yellow-400 h-[200px] w-fit ">
      <h1>Currently Blank to draw a pie Chart</h1>
    </div>
  </div>
  <h1 className='text-black ml-2  text-2xl font-bold'>Appointsments Status</h1>
   
    <div className="cardbox mt-2 ml-2  grid grid-flow-col  border-black overflow-scroll">
         
      <div className="cards h-60 w-68 mr-2 bg-zinc-200 hover:bg-zinc-300 rounded-md ">
      <div className="topbar text-black flex font-bold  text-[15px] justify-start gap-4 pl-2 ">
        <div className="date underline">01/10/2025</div>
        <div className="drname underline ">Dr.Smith </div>
      </div>
      <div className="description text-black  h-24 overflow-hidden w-56 mt-2 ml-2">Lorem ipsum dolor sit amet delectus in culpa nobis expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fugit ratione</div>
      <div className=" text-black font-bold mt-2 pt-1.5 pb-1.5 flex justify-between gap-2 border-2 border-zinc-400 rounded-sm text-[14px] mr-1 ml-1 pr-1 pl-1 ">
      <div>Alloted Date:</div>
      <div className=" text-[13px]  datetime flex justify-end gap-1 font-bold">
      <div className="date">12/12/2025</div>
        <div className="time">7:00AM</div>
        </div>
      </div>
<div className="Statusbob bg-amber-400 text-black border-2 border-zinc-400 rounded-sm mt-2 ml-1 mr-1 pt-1.5 pb-1.5 text-center font-bold">Pending</div> 

</div>
      
           
      <div className="cards h-60 w-68 mr-2  bg-zinc-200 hover:bg-zinc-300 rounded-md">
      <div className="topbar text-black flex font-bold justify-around">
        <div className="date underline">01/10/2025</div>
        <div className="drname underline">Dr.Smith</div>
      </div>
      <div className="description text-black  h-24 overflow-hidden w-56 mt-2 ml-2">Lorem ipsum dolor sit amet delectus in culpa nobis expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fugit ratione</div>
      <div className=" text-black font-bold mt-2 pt-1.5 pb-1.5 flex justify-between gap-2 border-2 border-zinc-400 rounded-sm text-[14px] mr-1 ml-1 pr-1 pl-1 ">
      <div>Alloted Date:</div>
      <div className=" text-[13px]  datetime flex justify-end gap-1 font-bold">
      <div className="date">12/12/2025</div>
        <div className="time">7:00AM</div>
        </div>
      </div>
<div className="Statusbob bg-amber-400 text-black border-2 border-zinc-400 rounded-sm mt-2 ml-1 mr-1 pt-1.5 pb-1.5 text-center font-bold">Pending</div> 

</div>
           
      <div className="cards h-60 w-68 mr-2 bg-zinc-200 hover:bg-zinc-300 rounded-md">
      <div className="topbar text-black flex font-bold justify-around">
        <div className="date underline">01/10/2025</div>
        <div className="drname underline">Dr.Smith</div>
      </div>
      <div className="description text-black  h-24 overflow-hidden w-56 mt-2 ml-2">Lorem ipsum dolor sit amet delectus in culpa nobis expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fugit ratione</div>
      <div className=" text-black font-bold mt-2 pt-1.5 pb-1.5 flex justify-between gap-2 border-2 border-zinc-400 rounded-sm text-[14px] mr-1 ml-1 pr-1 pl-1 ">
      <div>Alloted Date:</div>
      <div className=" text-[13px]  datetime flex justify-end gap-1 font-bold">
      <div className="date">12/12/2025</div>
        <div className="time">7:00AM</div>
        </div>
      </div>
<div className="Statusbob bg-amber-400 text-black border-2 border-zinc-400 rounded-sm mt-2 ml-1 mr-1 pt-1.5 pb-1.5 text-center font-bold">Pending</div> 

</div>   
      <div className="cards h-60 w-68 mr-2 bg-zinc-200 hover:bg-zinc-300 rounded-md">
      <div className="topbar text-black flex font-bold justify-around ">
        <div className="date underline">01/10/2025</div>
        <div className="drname underline">Dr.Smith</div>
      </div>
      <div className="description text-black  h-24 overflow-hidden w-56 mt-2 ml-2">Lorem ipsum dolor sit amet delectus in culpa nobis expedita Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fugit ratione</div>
      <div className=" text-black font-bold mt-2 pt-1.5 pb-1.5 flex justify-between gap-2 border-2 border-zinc-400 rounded-sm text-[14px] mr-1 ml-1 pr-1 pl-1 ">
      <div>Alloted Date:</div>
      <div className=" text-[13px]  datetime flex justify-end gap-1 font-bold">
      <div className="date">12/12/2025</div>
        <div className="time">7:00AM</div>
        </div>
      </div>
<div className="Statusbob bg-amber-400 text-black border-2 border-zinc-400 rounded-sm mt-2 ml-1 mr-1 pt-1.5 pb-1.5 text-center font-bold">Pending</div> 
</div>
    </div> 
     </div>
   }
   </>
  )
}

export default User;