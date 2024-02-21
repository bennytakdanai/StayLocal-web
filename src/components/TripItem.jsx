import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faEye } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import { useState } from 'react'
import Modal from './Modal'
import useTour from '../hooks/useTour'

function TripItem({guideTour,setLoading,deleteTourFromTourId}) {
  const [toggleModal,setToggleModal,] = useState(false)


  const sumOfBookingPeople = 
    guideTour.bookings
    ? guideTour.bookings.reduce((acc,curr)=> acc+curr.numberOfPeople ,0) 
    :0

  const handleSeeBooking = (e) => setToggleModal(true)

  const handleDelete = async(id)=> {
    try{
      setLoading(true)
      const result = await deleteTourFromTourId(id)
      console.log(result)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <div className='w-2/3 h-[320px] bg-[#F1F5F9] p-5 pl-10 flex justify-between'>
        
            <Card src={guideTour.tourProfileImage}/>
            <div className='flex flex-col text-left'>
                <div className='text-3xl m-6 text-center'>{guideTour.name}</div>
                <div className='text-xl m-2 text-center'>{sumOfBookingPeople} people has booked</div>
                <div className='text-xl m-2 text-center'>Duration : {guideTour.duration}</div>
                <div className='text-xl m-2 text-center'>Start Date : {guideTour.date.slice(0,10)}</div>
                <div className='text-xl m-2 text-center'>Price : {guideTour.price} thB</div>

            </div>
            <div className='flex flex-col gap-5'>
                <FontAwesomeIcon 
                    className=' text-xl hover:cursor-pointer' icon={faTrash} 
                    onClick={()=>handleDelete(guideTour.id)}
                />
                <FontAwesomeIcon className=' text-xl hover:cursor-pointer' icon={faPenToSquare} />
                <FontAwesomeIcon 
                  className=' text-xl hover:cursor-pointer' icon={faEye}
                  onClick={handleSeeBooking}
                />
            </div>

            {toggleModal&&
            <Modal 
              onclose={e=>setToggleModal(false)}
              bookings={guideTour.bookings}
            />
            }
       
    </div>
  )
}

export default TripItem