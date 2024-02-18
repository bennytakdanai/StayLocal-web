import React from 'react'
import avatar from '../assets/avatar.jpg'

function Avatar({src}) {
  return (
    <div>
        <img 
        className=' w-44 h-44 rounded-full'
          src={ src ||avatar} alt="profilepic" 
        />
    </div>
  )
}

export default Avatar