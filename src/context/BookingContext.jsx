import axios from "../config/axios";
import { createContext } from "react";



export const BookingContext = createContext()

export default function BookingContextProvider(props){

    const createBooking =(async(data)=>{
        const result = await axios.post('/booking',data)
        return result.data.booking
    })

    const getClientBooking = (async(clientId)=>{
        const result = await axios.get('/booking',clientId)
        return result.data.clientBooking
    })


    return(
        <BookingContext.Provider value={{createBooking,getClientBooking}}>
            {props.children}
        </BookingContext.Provider>
    )
}