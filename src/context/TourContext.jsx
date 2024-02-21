import { createContext } from "react";
import axios from "../config/axios";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";


export const TourContext = createContext()

export default function TourContextProvider (props){

    const getTourFromGuideId = (async(guideId)=>{
        const result = await axios.get('/tour/guide',guideId)
        return result.data.tours
    })

    const getTourFromTourId = (async(tourId)=>{
        try{
            const result = await axios.get(`/tour/${tourId}`)
            return result.data.tour
        }catch(err){
            console.log(err)
        }
    })

    const deleteTourFromTourId = async(id)=>{
        try{
            const result = await axios.delete(`/tour/guide/${id}`)
            toast.success('cancel Tour success')
            
        }catch(err){
            console.log(err)
        }
    }


    return (
        <TourContext.Provider value={{getTourFromGuideId,getTourFromTourId,deleteTourFromTourId}}>
            {props.children}
        </TourContext.Provider>
    )


}