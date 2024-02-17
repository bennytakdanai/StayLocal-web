import axios from "../config/axios";
import { createContext } from "react";



export const BookingContext = createContext()

export default function BookingContextProvider(props){

    const createBooking =(async(data)=>{
        const result = await axios.post('/booking',data)
        return result.data.booking
    })


    return(
        <BookingContext.Provider value={{createBooking}}>
            {props.children}
        </BookingContext.Provider>
    )
}