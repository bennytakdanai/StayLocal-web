import axios from "../config/axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

export default function AuthContextProvider(props){
    const[user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)
    
    useEffect(()=>{
        const run = async()=>{
            try{
                setLoading(true)
                let token = localStorage.getItem('token')
                if(token){
                    const result = await axios.get('/auth/me',
                    {headers: {Authorization : `Bearer ${token}`}})
                    console.log(result)
                    setUser(result.data.user)
                }
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        run()
    },[])

    return(
        <AuthContext.Provider value={{user,setUser,loading}}>
            {props.children}
        </AuthContext.Provider>
    )
}