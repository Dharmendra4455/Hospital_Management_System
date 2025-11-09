import React, { useEffect, useState } from 'react'
import serv1 from '../../assets/serv1.jpeg'
import serv2 from '../../assets/serv2.jpeg'
import serv3 from '../../assets/serv3.jpeg'
import serv4 from '../../assets/serv4.jpeg'
import serv5 from '../../assets/serv5.jpeg'
import serv6 from '../../assets/serv6.jpeg'
import serv7 from '../../assets/serv7.jpeg'
import serv8 from '../../assets/serv8.jpeg'
import serv9 from '../../assets/serv9.jpeg'
import serv10 from '../../assets/serv10.avif'
import  './home.css'
const ServicesCard = (props) => {
    const [theme,settheme]=useState()
     
          useEffect(()=>{
             settheme(props.theme)
           
          },[props])
  return (
   <>
    <div className={theme==='bright'?'':'bg-zinc-800'}>
    <h1 className={theme==='bright'?'text-black text-2xl ml-5 font-bold mb-5 pt-2':'text-white text-2xl ml-5 font-bold mb-5  pt-2'}> Services</h1>
    <div  className='  hidescroll'>
    <div  className='flex  scrollhidden'>

    <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv1} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>Proper Caring</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv2} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'> Flexible Beds and AC</h1>
        </div>
     </div>


     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv5} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg  pb-5'>Timely CheckUp & Treatment</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv6} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>Proper Clean Environment</h1>
        </div>
     </div>
    
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv7} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>Operation Threatre</h1>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv8} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>24X7 Emergency Service</h1>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv9} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>24X7 Blood Bank Open</h1>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv10} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>24X7 Oxygen Available</h1>
        </div>
     </div>
    <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv1} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>Proper Caring</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv2} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'> Flexible Beds and AC</h1>
        </div>
     </div>


     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv5} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg  pb-5'>Timely CheckUp & Treatment</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv6} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>Proper Clean Environment</h1>
        </div>
     </div>
    
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv7} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>Operation Threatre</h1>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv8} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>24X7 Emergency Service</h1>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv9} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>24X7 Blood Bank Open</h1>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={serv10} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-lg pb-5'>24X7 Oxygen Available</h1>
        </div>
     </div>
      
    </div>
     </div>
   </div>
   </>
  )
}

export default ServicesCard