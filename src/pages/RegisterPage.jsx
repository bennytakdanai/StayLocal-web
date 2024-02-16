import React from 'react'
import Header from '../layouts/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import axios from '../config/axios'
import { useState } from 'react'
import validateRegister from '../features/validations/validate-register'
import useAuth from '../hooks/useAuth'

function RegisterPage() {
    const [input,setInput] = useState({
        username:'',
        email:'',
        firstname:'',
        lastname:'',
        password:'',
        confirmPassword:'',
        isGuide:''
    })
    const [inputError,setInputError]= useState({})
    const {register} = useAuth()

    const handleChange = (e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleRegister = async(e) =>{
        try{
            e.preventDefault()
            if(validateRegister(input)){
                setInputError(validateRegister(input))
            }else {
                await register(input)
            }
        }catch(err){
            console.log(err)
        }

    }

  return (
    <div className='flex flex-col items-center gap-8'>
        <Header/>
        <form
            className='bg-[#F1F5F9] w-[800px] h-[800px] mb-20 flex flex-col items-center gap-10'
            onSubmit={handleRegister}
        >
            <div className='text-6xl m-5'>Register</div>
            <div className='flex justify-around gap-10'>
                <TextInput
                    placeholder='username...'
                    onchange={handleChange}
                    value={input.username}
                    name='username'
                    type='text'
                    inputerr={inputError.username}
                />
                <TextInput
                    placeholder='email...'
                    onchange={handleChange}
                    value={input.email}
                    name='email'
                    type='text'
                    inputerr={inputError.email}
                />
            </div>
            <div className='flex justify-around gap-10'>
                <TextInput
                    placeholder='firstname...'
                    onchange={handleChange}
                    value={input.firstname}
                    name='firstname'
                    type='text'
                    inputerr={inputError.firstname}
                />
                <TextInput
                    placeholder='lastname...'
                    onchange={handleChange}
                    value={input.lastname}
                    name='lastname'
                    type='text'
                    inputerr={inputError.lastname}
                />
            </div>
            <div className='flex justify-around w-[500px] gap-10'>
                <TextInput
                    placeholder='password...'
                    onchange={handleChange}
                    value={input.password}
                    name='password'
                    type='password'
                    inputerr={inputError.password}
                />
                <TextInput
                    placeholder='confirm password...'
                    onchange={handleChange}
                    value={input.confirmPassword}
                    name='confirmPassword'
                    type='password'
                    inputerr={inputError.confirmPassword}
                />
            </div>
            <div className='flex gap-2 items-center'>
                <label>Is you a guide</label>
                <select 
                    className="select select-bordered  " 
                    value={input.isGuide} 
                    onChange={handleChange}
                    name='isGuide'
                    
                >
                    <option hidden>Please Select</option>
                    <option value={true}>Guide</option>
                    <option value={false}>Client</option>
                    
                </select>
                <small className='text-red-500'>{inputError.isGuide}</small>
            </div>
            <div className='flex justify-around gap-8 m-8'>
                <Button type={'submit'}>Register</Button>
            </div>

        </form>
    </div>
  )
}

export default RegisterPage