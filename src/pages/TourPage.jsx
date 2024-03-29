import React from 'react'
import cover from '../assets/cover.jpg'
import Header from '../layouts/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight,faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import ReviewStar from '../components/ReviewStar'
import useTour from '../hooks/useTour'
import { useEffect } from 'react'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useParams } from 'react-router-dom'
import BookingForm from '../features/tour/BookingForm'
import FootagePreview from '../features/tour/FootagePreview'

function TourPage() {
    const [tour,setTour] = useState({})

    const {id:tourId} = useParams()
    const {getTourFromTourId} = useTour()
    const {user} = useAuth()

    const sumOfBookingPeople = 
        tour.bookings
        ? tour.bookings.reduce((acc,curr)=> acc+curr.numberOfPeople ,0) 
        : 0
    console.log(sumOfBookingPeople)

    useEffect(()=>{
        const run = async(tourId)=>{
            try{
                const tourFound = await getTourFromTourId(tourId)
                setTour(tourFound)
            }catch(err){
                console.log(err)
            }
        }
        run(tourId) 
    },[])
    console.log(tour)

  return (
    <div className='flex flex-col items-center'>
        
        <Header/>
        <h1 className='text-5xl p-5 mt-5 mb-5 text-center'>{tour.name}</h1>
        {/* <div className='flex justify-evenly items-center w-full'>
            <FontAwesomeIcon className=' text-5xl' icon={faCaretLeft} />
            <img className=' w-5/6' src={cover}  alt="cover img"  />
            <FontAwesomeIcon className=' text-5xl' icon={faCaretRight} />
        </div> */}
        <FootagePreview tourId={tourId}/>
        <div className='flex w-5/6 p-10'>
            <div className=' flex-1 flex flex-col gap-4  pt-10 '>
                <p className='text-lg'>Location : {tour.location}</p>
                <p className='text-lg'>Duration : {tour.duration}</p>
                <p className='text-lg'>Tour Size : {tour.groupSize} peoples</p>
                <p className='text-lg'>Price : {tour.price} thB</p>
                <p className='text-lg'>Date : {(tour.date)?.slice(0,10)}</p>
            </div>
            <div className=' flex-1 text-md p-5'>
               DETAIL: {tour.tourDetail}
            </div>
        </div>
        <div className='flex w-5/6 text-md py-10'>
            <div className=' flex-1  w-2/3 '>
               PROGRAM: {tour.tourProgram}
            </div>
            <div className='flex-1 w-1/3 p-10 flex flex-col gap-5 items-center'>
                <p>Tour type : {tour.type}</p>
                <ReviewStar/>
                <p>Review By 100 users</p>
                <BookingForm 
                    tourId={tourId} 
                    user={user}
                    groupSizeLeft={tour.groupSize-sumOfBookingPeople}
                />
                
            </div>
        </div>
       
    </div>
  )
}

export default TourPage