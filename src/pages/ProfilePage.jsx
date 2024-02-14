import React from 'react'
import Header from '../layouts/Header'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import TripItem from '../components/TripItem'
import Modal from '../components/Modal'

function ProfilePage() {
  return (
    <div>
        {/* <Modal/> */}
        <Header/>
        <div className='grid grid-cols-3 items-center'>
            <div className='flex flex-col items-center'>
                <Avatar/> 
                <small>Edit profile picture</small>  
            </div>
            <div className='text-6xl m-10 text-center'>Username</div>
        </div>
        <div className='flex m-20 justify-around'>
            <div className=' text-4xl'>Your Trip</div>
            <Button>Create New Tour</Button>
        </div>
        <div className='flex flex-col items-center gap-10 mb-10'>
            <TripItem/>
            <TripItem/>
            <TripItem/>
        </div>
    </div>
  )
}

export default ProfilePage