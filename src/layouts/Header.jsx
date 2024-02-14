import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className=' bg-[#F1F5F9] w-full h-[100px] flex justify-around items-center'>
        <h1 className=' text-5xl'>LocalHome</h1>
        <div className='flex justify-around gap-5'>
            <p>Home</p>
            <p>Profile</p>
            <p>Stay & Tour</p>
            <p>Login</p>
        </div>
    </div>
  )
}

export default Header