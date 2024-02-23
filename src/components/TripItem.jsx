import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faEye } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import { useState } from 'react'
import Modal from './Modal'
import useTour from '../hooks/useTour'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../config/axios'
import { useEffect } from 'react'

function TripItem({guideTour,setLoading,deleteTourFromTourId}) {
  const [toggleModal,setToggleModal,] = useState(false)
  const [toggleEdit,setToggleEdit,] = useState(false)
  const [editInput,setEditInput] = useState({
    name: guideTour.name,
    duration: guideTour.duration,
    date: guideTour.date,
    price: guideTour.price
  })


  const sumOfBookingPeople = 
    guideTour.bookings
    ? guideTour.bookings.reduce((acc,curr)=> acc+curr.numberOfPeople ,0) 
    :0

  const handleSeeBooking = () => setToggleModal(true)

  const handleChangeEdit = (e) =>{
    setEditInput({...editInput,[e.target.name]:e.target.value})
  }

  const handleSubmitEdit = async() =>{
    try{
      setLoading(true)
      const editedResult = await axios.patch(`/tour/${guideTour.id}`,editInput)
      console.log(editedResult)
      toast.success('tour already edit')
    }catch(err){
      console.log(err)
    }finally{
      setToggleEdit(false)
      setLoading(false)

    }
  }

  const handleEditTour = (tourId) => {
    if(sumOfBookingPeople === 0 ){
      console.log(sumOfBookingPeople)
      console.log(editInput)
      setToggleEdit(true)
      
    }else{
      toast.error('can not edit tour that client already book')
    }
  }

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
            <div className='flex flex-col w-[800px] items-center'>
            {toggleEdit
            ?
            <>
                <input type='text' className='text-3xl m-6 text-center w-5/6' 
                  name='name' value={editInput.name} 
                  onChange={handleChangeEdit}
                />
                <div className='text-xl m-2 text-center'>{sumOfBookingPeople} people has booked</div>

                <input type='text' className='text-xl m-2 text-center w-[400px]' 
                  name='duration' value={editInput.duration} 
                  onChange={handleChangeEdit}
                />
                <input type='date' className='text-xl m-2 text-center w-[400px]' 
                  name='date' value={(editInput.date)} 
                  onChange={handleChangeEdit}
                />
                <input type='text' className='text-xl m-2 text-center w-[400px]' 
                  name='price' value={editInput.price} 
                  onChange={handleChangeEdit}
                />
                <button onClick={handleSubmitEdit} className=' text-sm'>Edit Tour</button> 
                </>
            :
            <>
                <div className='text-3xl m-6 text-center'>{guideTour.name}</div>
                <div className='text-xl m-2 text-center'>{sumOfBookingPeople} people has booked</div>
                <div className='text-xl m-2 text-center'>Duration : {guideTour.duration}</div>
                <div className='text-xl m-2 text-center'>Start Date : {guideTour.date.slice(0,10)}</div>
                <div className='text-xl m-2 text-center'>Price : {guideTour.price} thB</div>
            </>
            }

            </div>
            <div className='flex flex-col gap-5'>
                <FontAwesomeIcon 
                    className=' text-xl hover:cursor-pointer' icon={faTrash} 
                    onClick={()=>handleDelete(guideTour.id)}
                />
                <FontAwesomeIcon 
                    className=' text-xl hover:cursor-pointer' 
                    icon={faPenToSquare} 
                    onClick={()=>handleEditTour(guideTour.id)}
                />
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