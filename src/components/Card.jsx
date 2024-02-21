import React from 'react'
import vietnam from '../assets/profile-test.jpg'

function Card({src}) {
  return (
    <img 
        className=' w-[210px] h-[280px] bg-gray-500 rounded-lg'
        src={src? src : vietnam} 
        alt="tour card" 
    />
  )
}

export default Card