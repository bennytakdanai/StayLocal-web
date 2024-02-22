import React from 'react'
import vietnam from '../assets/profile-test.jpg'

function Card({src,name,date}) {
  return (
    <div className='relative'>
    <img 
        className=' w-[210px] h-[280px] bg-gray-500 rounded-lg '
        src={src? src : vietnam} 
        alt="tour card" 
    />
    <div className='w-[210px] bg-[#FC9756] opacity-80 absolute bottom-0 left-0 right-0 p-1 rounded-b-lg'>
      <div className=' text-center'>{name.slice(0,18)}...</div>
      <div className=' text-center'>{date.slice(0,10)}</div>
    </div>

    </div>
  )
}

export default Card