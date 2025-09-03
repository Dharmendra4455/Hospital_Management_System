import React, { useEffect, useState } from 'react'
import doctor from '../../assets/doctor.png'
const Doctorscard = (props) => {
   const [theme,settheme]=useState()

      useEffect(()=>{
         settheme(props.theme)
       
      },[props])
   
  return (<>
  
   <div className={theme==='bright'?'':'bg-zinc-800'}>
   <h1 className={theme==='bright'?'text-black text-2xl ml-5 font-bold mb-5 pt-2':'text-white text-2xl ml-5   font-bold mb-5  pt-2'}> Specialist Doctors</h1>
    <div className='mt-1 ml-5  grid grid-flow-col overflow-x-scroll '>
    <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={doctor} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. SK Gupta</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Seurgeon</p>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={doctor} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. SK Gupta</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Seurgeon</p>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={doctor} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. SK Gupta</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Seurgeon</p>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={doctor} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. SK Gupta</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Seurgeon</p>
        </div>
     </div>
        <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={doctor} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. SK Gupta</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Seurgeon</p>
        </div>
     </div>

     

     </div>

     

     </div>

     

    </>
  )
}

export default Doctorscard