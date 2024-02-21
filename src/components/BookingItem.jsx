import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faEye } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import useBooking from '../hooks/useBooking'
import { useState } from 'react'
import PlusMinus from './PlusMinus'

function BookingItem({booking,setLoading,cancelBooking,editClientBooking}) {
  const id = booking.id
  const numberOfPeople = booking.numberOfPeople
  const name = booking.tour.name
  const duration = booking.tour.duration
  const price = booking.tour.price
  const date = booking.tour.date
  const groupSize = booking.tour.groupSize
  const tourProfileImage = booking.tour.tourProfileImage

  const [toggle,setToggle] = useState(false)
  const [count,setCount] = useState(numberOfPeople)

  const handleToggle = ()=> {setToggle(!toggle)}
  const handleEdit = async(count,id) => {
    try{
      setLoading(true)
      const result = await editClientBooking(count, id)
      console.log(result)
    }catch(err){
      console.log(err)
    }finally{
      handleToggle()
      setLoading(false)
    }
  }

  const handleDelete = async(id) =>{
    try{
      setLoading(true)
      const result = await cancelBooking(id)
      console.log(result)

    }catch(err){
      console.log(err)
    } finally{
      setLoading(false)
    }
  }
  
  return (
    <div className='w-2/3 h-[320px] bg-[#F1F5F9] p-5 pl-10 flex justify-between'>
        
            <Card src={tourProfileImage}/>
            <div className='flex flex-col text-left'>
                <div className='text-3xl m-6 text-center'>{name}</div>
                <div className='text-xl m-2 text-center items-center'>
                  {!toggle?
                  `group ${count} people`:
                  <div className='flex justify-center gap-4'>
                    <PlusMinus props={[count,setCount,groupSize]}/>
                    <button 
                    className=' text-white bg-gray-600 px-2 py-1 rounded-lg text-base'
                    onClick={()=>{handleEdit(count,id)}}>
                    Click to edit
                    </button> 
                  </div>
                  } 
                </div>
                <div className='text-xl m-2 text-center'>Duration : {duration}</div>
                <div className='text-xl m-2 text-center'>Start Date : {date.slice(0,10)}</div>
                <div className='text-xl m-2 text-center'>Price : {price} thB</div>

            </div>
            <div className='flex flex-col gap-5'>
                <FontAwesomeIcon 
                  className=' text-xl hover:cursor-pointer' 
                  icon={faTrash} 
                  onClick={()=>{handleDelete(id)}}
                />
                <FontAwesomeIcon 
                  className=' text-xl hover:cursor-pointer' 
                  icon={faPenToSquare} 
                  onClick={handleToggle}
                />
                
            </div>
       
    </div>
  
  )
}

export default BookingItem