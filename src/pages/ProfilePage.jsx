import React from 'react'
import Header from '../layouts/Header'
import Avatar from '../components/Avatar'
import Modal from '../components/Modal'
import useAuth from '../hooks/useAuth'
import useTour from '../hooks/useTour'
import { useEffect } from 'react'
import { useState } from 'react'
import ProfileTourList from '../features/profile/ProfileTourList'
import ProfileBookingList from '../features/profile/ProfileBookingList'

function ProfilePage() {
    const {user} = useAuth()

  return (
    <div>
        <Header/>
        <div className='grid grid-cols-3 items-center'>
            <div className='flex flex-col items-center'>
                <Avatar/> 
                <small>Edit profile picture</small>  
            </div>
            <div className='flex flex-col'>
                <div className='text-6xl m-10 text-center'>Welcome: {user.username}</div>
                <div className='text-xl m-1 text-center'>{user.firstname} {user.lastname}</div>
            </div>
        </div>
        
        {user.isGuide
        ?
        <ProfileTourList user={user}/>
        :
       <ProfileBookingList user={user}/>
        }
    </div>
  )
}

export default ProfilePage