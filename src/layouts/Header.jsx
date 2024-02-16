import React from 'react'
import {Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Header() {
  const {user,logout} = useAuth()
  return (
    <div className=' bg-[#F1F5F9] w-full h-[100px] flex justify-around items-center'>
        <h1 className=' text-5xl'>LocalHome</h1>
        <div className='flex justify-around gap-5'>
          <Link to={'/'}>
            <p>Home</p>
          </Link>

          <Link to={'/profile'}>
            <p>Profile</p>
          </Link>

          <Link to={{pathname: '/', hash: '#tourSection'}}>
            <p>Stay & Tour</p>
          </Link>
          {user
          ?
          <Link to={'/'}>
            <div onClick={logout} >Logout</div>
          </Link>
          :
          <Link to={'/login'}>
            <p>Login</p>
          </Link>
          
          }
        </div>
    </div>
  )
}

export default Header