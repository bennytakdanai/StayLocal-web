import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faEye } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'

function TripItem() {
  return (
    <div className='w-2/3 h-[320px] bg-[#F1F5F9] p-5 pl-10 flex justify-between'>
        
            <Card/>
            <div className='flex flex-col text-left'>
                <div className='text-4xl m-6 text-center'>Lisu Lodge</div>
                <div className='text-xl m-2 text-left'>5 people has booked</div>
                <div className='text-xl m-2 text-left'>Duration : 3 days</div>
                <div className='text-xl m-2 text-left'>Start Date : 21/02/2024</div>
                <div className='text-xl m-2 text-left'>Price : 3000 thB</div>

            </div>
            <div className='flex flex-col gap-2'>
                <FontAwesomeIcon className=' text-xl' icon={faTrash} />
                <FontAwesomeIcon className=' text-xl' icon={faPenToSquare} />
                <FontAwesomeIcon className=' text-xl' icon={faEye} />
                
            </div>
       
    </div>
  )
}

export default TripItem