import React from 'react'
import Header from '../layouts/Header'
import { useState } from 'react'
import SelectBar from '../components/SelectBar'
import Button from '../components/Button'
import axios from '../config/axios'
import { toast } from 'react-toastify'
import validateTourCreate from '../features/validations/validate-tour'


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
        setInput({...input,[e.target.name]:e.target.value})
    }


    const handleSubmit = async()=>{
        setInputError({})
        console.log(validateTourCreate(input))
        console.log(input)
        try{
            if(validateTourCreate(input)){
                setInputError(validateTourCreate(input))
                toast.error('please fill data')
                return
            }
            const formData = new FormData()
            formData.append('tourProfileImage',tourProfileImage)
            formData.append('name',input.name)
            formData.append('date',input.date)
            formData.append('duration',input.duration)
            formData.append('location',input.location)
            formData.append('groupSize',input.groupSize)
            formData.append('tourDetail',input.tourDetail)
            formData.append('tourProgram',input.tourProgram)
            formData.append('price',input.price)
            formData.append('type',input.type)
            const result = await axios.post('/tour/guide',formData)
            toast.success("tour created")
            
        }catch(err){
            toast.error(err.response?.data.message)
        }
    }

    const handleChooseFile=(e)=>{
        setTourProfileImage(e.target.files[0])
        setInput({...input,tourProfileImage:"have pic"})
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
              {inputError?<small className=' text-red-600'>{inputError.name}</small>:<></>}          
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
                    {inputError?<small className=' text-red-600'>{inputError.location}</small>:<></>}
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
                    {inputError?<small className=' text-red-600'>{inputError.duration}</small>:<></>}
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
                    {inputError?<small className=' text-red-600'>{inputError.groupSize}</small>:<></>}
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
                    {inputError?<small className=' text-red-600'>{inputError.price}</small>:<></>}
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
                        {inputError?<small className=' text-red-600'>{inputError.tourProgram}</small>:<></>}
                    </div>

                </div>
            {/* detail */}
                <div className=' flex-1 text-md p-5'>
                   DETAIL: 
                   <textarea
                        className=' bg-[#F1F5F9] p-2 rounded w-[600px] h-[250px]'
                        name='tourDetail'
                        onChange={handleChange}
                        value={input.tourDetail}
                    />
                    {inputError?<small className=' text-red-600'>{inputError.tourDetail}</small>:<></>}
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
                    {inputError?<small className=' text-red-600'>{inputError.tourProgram}</small>:<></>}
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
                    <div className='flex justify-around mt-1 p-2 border-2'>
                        <button onClick={handleCancel}>cancel</button>
                    </div>
                </div>
                :
                <div className='w-[210px] h-[280px] bg-gray-500 flex flex-col justify-center items-center'>
                        {inputError?<small className=' text-red-600'>{inputError.tourProfileImage}</small>:<></>}
                        <label 
                            htmlFor="tourProfileImage"
                            className='p-4 bg-slate-200 hover:cursor-pointer'
                        >Click to add profile </label>
                        <input 
                            type='file' id="tourProfileImage" 
                            accept="image/png, image/jpeg"
                            className=' hidden'
                            onChange={handleChooseFile}
                        />
                        
                    </div> 
                }
                <Button onclick={handleSubmit}>Create Tour </Button>  
                    
                </div>
            </div>
           
        </div>
      )
}

export default CreateTourPage