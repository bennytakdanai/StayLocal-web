import React from 'react'
import Header from '../layouts/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

function LoginPage() {
  return (
    <div className='flex flex-col items-center gap-8'>
        <Header/>
        <div className='bg-[#F1F5F9] w-[800px] h-[600px] mb-20 flex flex-col items-center gap-10' >
            <div className='text-6xl m-10'>Log In</div>
            <TextInput>Username</TextInput>
            <TextInput>Password</TextInput>
            <div className='flex justify-around gap-8 m-14'>
                <Button>Log In</Button>
                <Button>Register</Button>
            </div>

        </div>
    </div>
  )
}

export default LoginPage