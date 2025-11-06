import React from 'react'

const Welcomebox = () => {
  const data =JSON.parse(localStorage.getItem('loggedperson')).data
  //  console.log(data)
  return (
    <>
     <div className="Name_container">
   <div className="welcome  min-w-[320px] ml-2 mr-2 rounded-xl h-auto text-black bg-gradient-to-r from-zinc-100 to-zinc-700 border-2 ">
     <div className="welcomename mt-2 ">
     <h1 className='text-2xl font-serif font-bold text-center'>WELCOME</h1>
     <h1 className='text-xl font-serif font-bold text-center'>{data.firstname + " " + data.lastname}</h1>
    </div>
    <div className='flex justify-evenly mb-4 font-bold'>
    <div className='pl-2'><span>ID : </span>{data.id}</div>
    <div className='overflow-hidden ml-2'><span>Email : </span>{data.email}</div>
    </div>
    </div>
   </div>
    </>
  )
}

export default Welcomebox