import React from 'react'
import boat from "../assets/boat.jpg"
import tea from "../assets/tea.jpg"

import Header from '../layouts/Header'
import SearchingForm from '../features/tour/SearchingForm'

function HomePage() {
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center justify-center'>
        
        <div className=' relative w-full'>
            <img src={boat} className=' w-full'></img>
            <div className=' absolute text-8xl text-white top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>StayLocal</div>
        </div>
        <div className='flex flex-col items-center p-5 gap-4 m-5 w-3/4'>
            <div className='text-6xl'>Thailand Local Travel</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem suscipit optio excepturi, sequi maxime velit, odit, ipsam consequuntur voluptatum quibusdam ab voluptatem beatae aut consequatur. Nostrum optio repudiandae molestias modi.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem suscipit optio excepturi, sequi maxime velit, odit, ipsam consequuntur voluptatum quibusdam ab voluptatem beatae aut consequatur. Nostrum optio repudiandae molestias modi.</p>
        </div>
        <img src={tea} className=' w-full'></img>
        
    <SearchingForm/>
        
    </div>
    </>
  )
}

export default HomePage