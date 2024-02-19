import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faEye } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'

function TripItem({name,duration,date,price}) {
  return (
    <div className='w-2/3 h-[320px] bg-[#F1F5F9] p-5 pl-10 flex justify-between'>
        
            <Card/>
            <div className='flex flex-col text-left'>
                <div className='text-3xl m-6 text-center'>{name}</div>
                <div className='text-xl m-2 text-center'>5 people has booked(Mock)</div>
                <div className='text-xl m-2 text-center'>Duration : {duration}</div>
                <div className='text-xl m-2 text-center'>Start Date : {date.slice(0,10)}</div>
                <div className='text-xl m-2 text-center'>Price : {price} thB</div>

            </div>
            <div className='flex flex-col gap-5'>
                <FontAwesomeIcon className=' text-xl hover:cursor-pointer' icon={faTrash} />
                <FontAwesomeIcon className=' text-xl hover:cursor-pointer' icon={faPenToSquare} />
                <FontAwesomeIcon className=' text-xl hover:cursor-pointer' icon={faEye} />
                
            </div>
       
    </div>
  )
}

export default TripItem