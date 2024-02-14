import React from 'react'
import ReactDOM from 'react-dom'
import cover from '../assets/cover.jpg'
import Header from '../layouts/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight,faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button'
import ReviewStar from '../components/ReviewStar'
import PlusMinus from '../components/PlusMinus'


function TourPage() {
  return (
    <div className='flex flex-col items-center'>
        
        <Header/>
        <h1 className='text-6xl p-5 mt-5 mb-5'>Lisu Lodge</h1>
        <div className='flex justify-evenly items-center w-full'>
            <FontAwesomeIcon className=' text-5xl' icon={faCaretLeft} />
            <img className=' w-5/6' src={cover}  alt="cover img"  />
            <FontAwesomeIcon className=' text-5xl' icon={faCaretRight} />
        </div>
        <div className='flex w-5/6 p-10'>
            <div className=' flex-1 bg-red-400 w p-10'>
                <p>Location:</p>
                <p>Duration:</p>
                <p>Tour Size:</p>
                <p>Price:</p>
                <p>Date:</p>
            </div>
            <div className=' flex-1 bg-blue-500 w-11 p-5'>
                Detail: 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque velit natus ullam optio pariatur magni quaerat soluta culpa. Nam similique laborum molestiae maxime repellendus quae nemo totam iusto nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam dolore eum ea iure? Sapiente odio inventore voluptatibus, numquam architecto labore non ipsam, id doloribus consequuntur ipsum vitae ratione? Libero.
            </div>
        </div>
        <div className='flex w-5/6 p-10'>
            <div className=' flex-1 bg-blue-500 w-11 p-5'>
                Detail: 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque velit natus ullam optio pariatur magni quaerat soluta culpa. Nam similique laborum molestiae maxime repellendus quae nemo totam iusto nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam dolore eum ea iure? Sapiente odio inventore voluptatibus, numquam architecto labore non ipsam, id doloribus consequuntur ipsum vitae ratione? Libero.
            </div>
            <div className='flex-1 bg-red-400 w p-10 flex flex-col gap-3 items-center'>
                <p>Tour type</p>
                <ReviewStar/>
                <p>Review By 100 users</p>
                <div className='flex gap-2'>Group <PlusMinus/> people</div>
                <Button>Join Us</Button>
            </div>
        </div>
       
    </div>
  )
}

export default TourPage