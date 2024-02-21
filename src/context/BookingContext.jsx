import { toast } from "react-toastify";
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

    const editClientBooking = (async(numberOfPeople,id)=>{
        const result = await axios.patch('/booking',{numberOfPeople,id})
        return result.data.bookingEdited
    })

    const cancelBooking = (async(id)=>{
        console.log(id)
        try{
            const result = await axios.delete(`/booking/${id}`)
            console.log(result)
            toast.success('cancel booking complete')
            return result.data.bookingCancel

        }catch(err){
            console.log(err)
        }
    })


    return(
        <BookingContext.Provider value={{createBooking,getClientBooking,editClientBooking,cancelBooking}}>
            {props.children}
        </BookingContext.Provider>
    )
}