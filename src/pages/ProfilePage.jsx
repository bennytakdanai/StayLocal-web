import React from 'react'
import Header from '../layouts/Header'
import Avatar from '../components/Avatar'
import useAuth from '../hooks/useAuth'
import useTour from '../hooks/useTour'
import axios from '../config/axios'
import { useState } from 'react'
import ProfileTourList from '../features/profile/ProfileTourList'
import ProfileBookingList from '../features/profile/ProfileBookingList'
import { useRef } from 'react'

function ProfilePage() {
    const fileEl = useRef()
    const {user} = useAuth()
    const [profilePicture,setProfilePicture] = useState(null)
    const [toggle,setToggle] = useState(false)

    const handleEdit = async(e) =>{
        // console.log(user.profilePicture)
        setProfilePicture(e.target.files[0])
        setToggle(true)
    }

    const handleSaveProfile = async(e) =>{
        const formData = new FormData()
        formData.append('profilePicture',profilePicture)
        const result = await axios.patch('/user',formData)
        console.log(result)
        console.log(formData)
        setToggle(false)
    }

    const handleCancel = ()=>{
        setToggle(false)
        setProfilePicture(null)
    }

  return (
    <div>
        <Header/>
        <div className='grid grid-cols-3 items-center'>
            <div className='flex flex-col gap-5 pt-5 items-center'>
                <input 
                    type='file' 
                    className='hidden'
                    ref={fileEl}
                    onChange={handleEdit}
                />
                <Avatar src={profilePicture ? URL.createObjectURL(profilePicture) :user.profilePicture}/> 
                {toggle
                ?
                <div className='flex gap-3'>
                    <button 
                        className="text-blue-500 font-light hover:underline rounded-md"
                        onClick={handleSaveProfile}
                    >save</button>
                    <button 
                        className="text-blue-500 font-light hover:underline rounded-md"
                        onClick={handleCancel}
                    >cancel</button>
                </div>
                :
                <button 
                className="text-blue-500 font-light hover:underline rounded-md"
                onClick={
                    async()=>{ 
                        await fileEl.current.click()
                    }}
                >
                    Edit profile picture
                </button>  
                }
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