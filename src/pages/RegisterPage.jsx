import React from 'react'
import Header from '../layouts/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import SelectBar from '../components/SelectBar'

function RegisterPage() {
  return (
    <div className='flex flex-col items-center gap-8'>
        <Header/>
        <div className='bg-[#F1F5F9] w-[800px] h-[700px] mb-20 flex flex-col items-center gap-10' >
            <div className='text-6xl m-5'>Register</div>
            <div className='flex justify-around gap-10'>
                <TextInput>Username</TextInput>
                <TextInput>E-mail</TextInput>
            </div>
            <div className='flex justify-around gap-10'>
                <TextInput>Firstname</TextInput>
                <TextInput>Lastname</TextInput>
            </div>
            <div className='flex justify-around gap-10'>
                <TextInput>Password</TextInput>
                <TextInput>Confirm Password</TextInput>
            </div>
            <SelectBar optionArr={['select role']}/>
            <div className='flex justify-around gap-8 m-8'>
                <Button>Register</Button>
            </div>

        </div>
    </div>
  )
}

export default RegisterPage