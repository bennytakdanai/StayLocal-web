import React from 'react'
import SelectBar from '../../components/SelectBar'
import SelectDate from '../../components/SelectDate'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { useState } from 'react'
import axios from '../../config/axios'
import { useEffect } from 'react'

function SearchingForm() {
    const [input,setInput] = useState({
        date:'',
        type:'',
        price:'',
        location:''
    })
    const [provinces,setProvinces] = useState([])

    const handleChange = (e) =>{
        console.log(e.target.value)
        setInput({...input,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        const run= async() =>{ 
            const result = await axios.get('/tour/province')
            const data = result.data.provinces.unshift('Where')
            setProvinces(result.data.provinces) 
           
        }
        run()
    },[])
    
    console.log(provinces)
    

  return (
    <>
        <div className='flex flex-col items-center p-5 gap-4 m-5 w-3/4' id='tourSection'>
            <div className='text-6xl text-center'>Explore Our Tours</div>
            <p>sequi maxime velit, odit, Nostrum optio repudiandae molestias modi.</p>
            
        </div>
        <div className='flex gap-10 p-5 ' >
            {/* Date */}
            <input 
                type='date' 
                min={new Date().toJSON().slice(0, 10)}
                name= 'date'
                onChange={handleChange}
                value={input.date}
            >
            </input>
            {/* Type */}
            <SelectBar 
                optionArr={['Tour Type','TREKING','FOOD','CRAFT','RELAXED','CULTURAL']}
                name= 'type'
                onChange={handleChange}
                value={input.type}
            />
            {/* Price */}
            <SelectBar 
                optionArr={
                    ['Tour cost','less than 1500','1500-3000','3000-5000','more than 5000']}
                name= 'price'
                onChange={handleChange}
                value={input.price}
            />

            {/* Location */}
            <SelectBar 
                optionArr={provinces}
                name= 'location'
                onChange={handleChange}
                value={input.location}
            />
            <Button>Find trip</Button>
        </div>
        <div className='grid grid-cols-3 gap-5 p-5'>
            <Card />
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
    
        </div>
    </>
  )
}

export default SearchingForm