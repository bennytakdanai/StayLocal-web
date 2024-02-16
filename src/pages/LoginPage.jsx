import Header from '../layouts/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { useState } from 'react'
import axios from '../config/axios'
import validateLogin from '../features/validations/validate-login'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'



function LoginPage() {
  const [input,setInput] = useState({username:"",password:""})
  const [inputError,setInputError] = useState({})
  const {login} = useAuth()

  const handleChange = (e)=>{
    setInput({...input, [e.target.name]:e.target.value})
  }
  const handleLogin = async(e)=>{
    try{
    e.preventDefault()
    
    if(validateLogin(input)){
      console.log(validateLogin(input))
      setInputError(validateLogin(input))
    }else {
      await login(input)
    }

    }catch(err){
      console.log(err)
    }

  }
  
  
  return (
    <div className='flex flex-col items-center gap-8'>
        <Header/>
        <form 
          className='bg-[#F1F5F9] w-[800px] h-[600px] mb-20 flex flex-col items-center gap-10'
          onSubmit={handleLogin}
        >
            <div className='text-6xl m-10'>Log In</div>
              <TextInput 
                placeholder='username...'
                onchange={handleChange}
                value={input.username}
                type={'text'}
                name='username'
                inputerr={inputError.username}
              />
              <TextInput
                placeholder='password...'
                onchange={handleChange}
                value={input.password}
                type={'password'}
                name='password'
                inputerr={inputError.password}
              />
            <div className='flex justify-around gap-8 m-14'>
                <Button type={"submit"}>Log In</Button>
                <Link to={"/register"}>
                  <Button type={"button"} >Register</Button>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default LoginPage