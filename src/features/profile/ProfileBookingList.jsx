import React from 'react'
import useBooking from '../../hooks/useBooking'
import { useState } from 'react'
import { useEffect } from 'react'
import BookingItem from '../../components/BookingItem'

function ProfileBookingList({user}) {
    const {getClientBooking,editClientBooking,cancelBooking} = useBooking()
    const [booking,setBooking] = useState([])

    const [loading,setLoading] = useState(false)
    
  

    let clientId = user.id

    useEffect(()=>{
        const run = async(clientId)=>{
            try{
                const bookings = await getClientBooking(clientId)
                // console.log(bookings)
                setBooking(bookings)

            }catch(err){
                console.log(err)
            }
        }
        run(clientId)
    },[loading])

  return (
    <div>
        <div className='flex m-20 justify-around'>
            <div className=' text-5xl'>Your Booking</div>
        </div>
        <div className='flex flex-col items-center gap-10 mb-10'>
            {booking.map((el)=> {
                return <BookingItem 
                    key={el.id}
                    booking ={el}
                    editClientBooking={editClientBooking}
                    cancelBooking={cancelBooking}
                    setLoading={setLoading}
                    />
                }
            )}
            
        </div>
    </div>
  )
}

export default ProfileBookingList