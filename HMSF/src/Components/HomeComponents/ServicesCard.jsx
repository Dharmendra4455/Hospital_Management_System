import React, { useEffect, useState } from 'react'
import beds from '../../assets/hospitalbed.png'
const ServicesCard = (props) => {
    const [theme,settheme]=useState()
    
          useEffect(()=>{
             settheme(props.theme)
           
          },[props])
  return (
   <>
    <div className={theme==='bright'?'':'bg-zinc-800'}>
    <h1 className={theme==='bright'?'text-black text-2xl ml-5 font-bold mb-5 pt-2':'text-white text-2xl ml-5 font-bold mb-5  pt-2'}> Services</h1>
    <div className='mt-1 ml-5  grid grid-flow-col overflow-x-scroll '>
    <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={beds} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-xl pb-5'>Electric Flexible Beds</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={beds} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-xl pb-5'>Electric Flexible Beds</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={beds} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-xl pb-5'>Electric Flexible Beds</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={beds} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-xl pb-5'>Electric Flexible Beds</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={beds} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-xl pb-5'>Electric Flexible Beds</h1>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
    <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]' src={beds} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden pl-1 text-xl pb-5'>Electric Flexible Beds</h1>
        </div>
     </div>
      
    
     </div>
   </div>
   </>
  )
}

export default ServicesCard