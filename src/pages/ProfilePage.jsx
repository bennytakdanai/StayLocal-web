import React from 'react'
import Header from '../layouts/Header'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import TripItem from '../components/TripItem'
import Modal from '../components/Modal'
import useAuth from '../hooks/useAuth'
import useTour from '../hooks/useTour'
import { useEffect } from 'react'
import { useState } from 'react'

function ProfilePage() {
    const {user} = useAuth()
    const {getTourFromGuideId} = useTour()
    const [guideTours,setGuideTours] = useState([])

    let guideId = ''
    if(user?.isGuide){
        guideId = user.id
    }
    useEffect(()=>{
        const run = async (guideId) =>{
            try{
                const tours = await getTourFromGuideId(guideId)
                console.log(tours)
                setGuideTours(tours)
                
            }catch(err){
                console.log(err)
            }
        } 
        run()
    },[])

    console.log(guideTours)

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
        
        <div className='flex m-20 justify-around'>
            <div className=' text-5xl'>{user.isGuide?'Trip List':'Your Trip'}</div>
            {user.isGuide && <Button>Create New Tour</Button>}
        </div>
        <div className='flex flex-col items-center gap-10 mb-10'>
            {guideTours.map((el)=> {
                return <TripItem 
                    key={el.id}
                    name={el.name}
                    duration={el.duration} 
                    price={el.price}
                    date={el.date}
                />
            }
            )}
            
        </div>
    </div>
  )
}

export default ProfilePage