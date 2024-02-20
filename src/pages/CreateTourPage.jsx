import React from 'react'
import Header from '../layouts/Header'
import cover from '../assets/cover.jpg'
import ReviewStar from '../components/ReviewStar'
import TextInput from '../components/TextInput'
import SelectDate from '../components/SelectDate'
import { useState } from 'react'
import SelectBar from '../components/SelectBar'
import Button from '../components/Button'


function CreateTourPage() {
    
    const [input,setInput] = useState({
        name:'',
        date:'',
        duration:'',
        location:'',
        groupSize:'',
        tourDetail:'',
        tourProgram:'',
        price:'',
        type:''
    })
    const [tourProfileImage,setTourProfileImage] = useState(null)
    const [inputError,setInputError] = useState({})
    const [toggle,setToggle] = useState(false)

    const handleChange = (e) =>{
        console.log(e.target.value)
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleSaveTourProfile = async(e)=>{

    }

    const handleChooseFile=(e)=>{
        setTourProfileImage(e.target.files[0])
        setToggle(true)
    }

    const handleCancel = () =>{
        setTourProfileImage(null)
        setToggle(false)
    }

    return (
        <div className='flex flex-col items-center'>
            
            <Header/>
            {/* name */}
            <div className='text-lg flex items-center gap-2 my-10'>
                        Enter Name : 
                        <input 
                        type='text' 
                        className=' bg-[#F1F5F9] p-2 rounded w-[800px] text-5xl'
                        name='name'
                        placeholder='Mekong Magic: SUP & Sunset Escape'
                        onChange={handleChange}
                        value={input.name}
                        /> 
                        
            </div>
            <div className='flex justify-evenly items-center w-full'>
                
                <button className=' w-5/6 bg-gray-500 aspect-video'
                   alt="cover img"  
                >
                    Add Image : 
                    
                </button>
                
            </div>
            <div className='flex w-5/6 p-10'>
                <div className=' flex-1 flex flex-col gap-4 pt-10 '>
            {/* location */}
                    <div className='text-lg flex items-center gap-2'>
                        Location : 
                        <input 
                        type='text' 
                        className=' bg-[#F1F5F9] p-2 rounded w-200'
                        name='location'
                        placeholder='Baan Duea, Nong Khai'
                        onChange={handleChange}
                        value={input.location}
                        /> 
                    </div>
            {/* duration */}
                    <div className='text-lg flex items-center gap-2'>
                        Duration : 
                        <input 
                        type='text' 
                        className=' bg-[#F1F5F9] p-2 rounded w-200'
                        name='duration'
                        placeholder='3day 2night'
                        onChange={handleChange}
                        value={input.duration}
                        /> 
                    </div>
            {/* groupSize */}
                    <div className='text-lg flex items-center gap-2'>
                        Tour Size :  
                        <input 
                        type='text' 
                        className=' bg-[#F1F5F9] p-2 rounded w-20'
                        name='groupSize'
                        placeholder='20'
                        onChange={handleChange}
                        value={input.groupSize}
                        /> 
                        peoples 
                    </div>
            {/* price */}
                    <div className='text-lg flex items-center gap-2'>
                        Price :  
                        <input 
                        type='text' 
                        className=' bg-[#F1F5F9] p-2 rounded w-20'
                        name='price'
                        placeholder='3000'
                        onChange={handleChange}
                        value={input.price}
                        /> 
                        thB
                    </div>
            {/* date */}
                    <div className='text-lg flex items-center gap-2'>
                        Date : 
                        <input 
                            type='date' 
                            min={new Date().toJSON().slice(0, 10)}
                            name= 'date'
                            onChange={handleChange}
                            value={input.date}
                        >
                        </input>
                    </div>

                </div>
                <div className=' flex-1 text-md p-5'>
                   DETAIL: 
                   <textarea
                        className=' bg-[#F1F5F9] p-2 rounded w-[600px] h-[250px]'
                        name='tourDetail'
                        onChange={handleChange}
                        value={input.tourDetail}
                    />
                </div>
            </div>
            <div className='flex w-5/6 text-md py-10'>
            {/* program */}
            <div className=' flex-1 text-md p-5'>
                   Program:
                   <textarea
                        className=' bg-[#F1F5F9] p-2 rounded w-[600px] h-[250px]'
                        name='tourProgram'
                        onChange={handleChange}
                        value={input.tourProgram}
                    />
            </div>
            <div className='flex-1 w-1/3 p-10 flex flex-col gap-5 items-center'>
            {/* type */}
                    <div className='flex gap-2 items-center'>Tour type : 
                        <SelectBar 
                            name= 'type'
                            onChange={handleChange}
                            value={input.type}
                            optionArr={['Select Type','TREKING','FOOD','CRAFT','RELAXED','CULTURAL']}
                            
                        />
                    </div>
            {/* profile */}
                {toggle
                ?
                <div>
                    <img className='w-[210px] h-[280px]'
                        src={URL.createObjectURL(tourProfileImage)} alt=''
                    />
                    <div className='flex justify-around p-2'>
                        <button>save</button>
                        <button onClick={handleCancel}>cancel</button>
                    </div>
                </div>
                :
                    <div className='w-[210px] h-[280px] bg-gray-500'>
                        add profile 
                        <input 
                            type='file' accept="image/png, image/jpeg"
                            onChange={handleChooseFile}
                        />
                    </div> 
                }
                <Button>Create Tour </Button>  
                    
                </div>
            </div>
           
        </div>
      )
}

export default CreateTourPage