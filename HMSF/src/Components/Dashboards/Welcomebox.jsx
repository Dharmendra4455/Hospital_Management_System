import React from 'react'

const Welcomebox = () => {
  return (
    <>
     <div className="Name_container">
   <div className="welcome  min-w-[320px] ml-2 mr-2 rounded-xl h-auto text-black bg-gradient-to-r from-zinc-100 to-zinc-700 border-2 ">
     <div className="welcomename ">
     <h1 className='text-2xl font-serif font-bold text-center'>WELCOME</h1>
     <h1 className='text-xl font-serif font-bold text-center'>Dharmendra Patel</h1>
    </div>
    <div className='flex justify-evenly '>
    <div className='pl-2'><span>Contact : </span>8545857482</div>
    <div className='overflow-hidden ml-2'><span>Email : </span>Dharmendrapatel1322004@gmail.com</div>
    </div>
    </div>
   </div>
    </>
  )
}

export default Welcomebox