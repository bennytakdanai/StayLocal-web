import React from 'react'
import PlusMinus from '../../components/PlusMinus'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useBooking from '../../hooks/useBooking'
import { toast } from 'react-toastify'

function BookingForm({user,tourId,groupSize}) {
  tourId= +tourId
  const[count,setCount] = useState(1)

  const {createBooking} = useBooking()

  const handleCreateBooking = async()=>{
    const data = {tourId,numberOfPeople:count}
    try{
      await createBooking(data)
      toast.success('booking success')

    }catch(err){
      toast.error(err.response?.data.message)
    }
  }

  return (
    <div className='flex flex-col items-center p-5 gap-2 bg-[#F1F5F9]'>
        <div className='flex items-center gap-2'>
          Group <PlusMinus props={[count,setCount,groupSize]}/> people
        </div>
        {user
        ?
        <Button onclick={handleCreateBooking}>Join Us</Button>
        :
        <Link to={'/login'}>
            <Button>Join Us</Button>
        </Link>
                }
    </div>
  )
}

export default BookingForm