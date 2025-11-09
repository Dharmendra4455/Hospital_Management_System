import React, { useEffect, useState } from 'react'
import Doc1 from '../../assets/Doc1.jpeg'
import Doc2 from '../../assets/Doc2.jpeg'
import Doc3 from '../../assets/Doc3.jpeg'
import Doc4 from '../../assets/Doc4.jpeg'
import Doc5 from '../../assets/Doc5.jpeg'
import Doc6 from '../../assets/Doc6.jpeg'
import Doc7 from '../../assets/Doc7.jpeg'
import './home.css'
const Doctorscard = (props) => {
   const [theme,settheme]=useState()

      useEffect(()=>{
         settheme(props.theme)
       
      },[props])
   
  return (<>
  
   <div className={theme==='bright'?'':'bg-zinc-800'}>
   <h1 className={theme==='bright'?'text-black text-2xl ml-5 font-bold mb-5 pt-2':'text-white text-2xl ml-5   font-bold mb-5  pt-2'}> Specialist Doctors</h1>
       <div  className='  hidescroll'>
       <div  className='flex  scrollhidden'>
    <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc1} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. SK Gupta</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Neurologist</p>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc2} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. NK Singh</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Cardiologist</p>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc3} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr.Neha Sinha Kumar</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Neurologist</p>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc4} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. PP Gothi</h1>
     < p className='text-sm'>Bpharma</p>
     < p className='text-sm pb-2 '>Dentist</p>
        </div>
     </div>
        <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc5} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. AK Yadav</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Seurgeon</p>
        </div>
     </div>
        <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc6} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. VP Jain</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Gastroenterologist</p>
        </div>
     </div>
        <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc7} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr.Ankit Patidar</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Gastroenterologist</p>
        </div>
     </div>
    <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc1} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. SK Gupta</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Neurologist</p>
        </div>
     </div>

     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc2} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. NK Singh</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Cardiologist</p>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc3} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr.Neha Sinha Kumar</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Neurologist</p>
        </div>
     </div>
     <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc4} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. PP Gothi</h1>
     < p className='text-sm'>Bpharma</p>
     < p className='text-sm pb-2 '>Dentist</p>
        </div>
     </div>
        <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc5} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. AK Yadav</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Seurgeon</p>
        </div>
     </div>
        <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc6} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr. VP Jain</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Gastroenterologist</p>
        </div>
     </div>
        <div className= {theme==='bright'?'mb-2 mr-2 text-black w-64 h-auto border-2 rounded border-zinc-200':'mb-2 mr-2 text-white w-64 h-auto border-2 rounded border-zinc-900'}>
        <div className={theme==='bright'?"imgcontainer flex justify-center":'imgcontainer flex justify-center bg-zinc-700'}>
            <img className='h-64 w-[420px]'src={Doc7} alt="" />
        </div>
        <div className={theme==='bright'?"writtenconten  bg-gray-100 pl-1":'writtenconten  bg-gray-500 pl-1'}>
        <h1 className=' overflow-hidden '> Dr.Ankit Patidar</h1>
     < p className='text-sm'>MBBS</p>
     < p className='text-sm pb-2 '>Gastroenterologist</p>
        </div>
     </div>
      
    
    
     </div>

     </div>

     </div>

    </>
  )
}

export default Doctorscard