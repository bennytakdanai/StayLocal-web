import axios from "../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

export default function AuthContextProvider(props){
    const[user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)
    const[reload,setReload] = useState(true)
    
    useEffect(()=>{
        const run = async()=>{
            try{
                setLoading(true)
                let token = localStorage.getItem('token')
                if(token){
                    const result = await axios.get('/auth/me',
                    {headers: {Authorization : `Bearer ${token}`}})
                    setUser(result.data.user)
                }
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        run()
    },[reload])

    const login = async(input) =>{
      const result = await axios.post('/auth/login',input)
      const token = result.data.token
      localStorage.setItem("token",token)
      setReload(!reload)
      console.log('login finish')

    }

    const register= async(input) =>{
        const result = await axios.post('/auth/register',input)
        const token = result.data.token
        localStorage.setItem("token",token)
        setReload(!reload)
        console.log('register finish')
    }

    const logout = () =>{
        localStorage.removeItem('token')
        setUser(null)
        setReload(!reload)
    }

    return(
        <AuthContext.Provider value={{user,setUser,loading,login,register,logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}