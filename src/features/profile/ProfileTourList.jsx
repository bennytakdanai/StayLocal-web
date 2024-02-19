import React from 'react'
import useTour from '../../hooks/useTour'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from '../../components/Button'
import TripItem from '../../components/TripItem'


function ProfileTourList({user}) {

    const {getTourFromGuideId} = useTour()
    const [guideTours,setGuideTours] = useState([])

    let guideId = user.id

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
        run(guideId)
    },[])

  return (
    <div>
        <div className='flex m-20 justify-around'>
            <div className=' text-5xl'>Trip List</div>
            <Button>Create New Tour</Button>
        </div>
        <div className='flex flex-col items-center gap-10 mb-10'>
            {guideTours.map((el)=> {
                console.log(el)
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

export default ProfileTourList