import React from 'react'
import useBooking from '../../hooks/useBooking'
import { useState } from 'react'
import { useEffect } from 'react'
import TripItem from '../../components/TripItem'

function ProfileBookingList({user}) {
    const {getClientBooking} = useBooking()
    const [booking,setBooking] = useState([])

    let clientId = user.id

    useEffect(()=>{
        const run = async(clientId)=>{
            try{
                const bookings = await getClientBooking(clientId)
                console.log(bookings)
                setBooking(bookings)

            }catch(err){
                console.log(err)
            }
        }
        run(clientId)
    },[])

  return (
    <div>
        <div className='flex m-20 justify-around'>
            <div className=' text-5xl'>Your Booking</div>
        </div>
        <div className='flex flex-col items-center gap-10 mb-10'>
            {booking.map((el)=> {
                return <TripItem 
                    key={el.id}
                    name={el.tour.name}
                    duration={el.tour.duration} 
                    price={el.tour.price}
                    date={el.tour.date}
                    />
                }
            )}
            
        </div>
    </div>
  )
}

export default ProfileBookingList