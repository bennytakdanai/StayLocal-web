import { createContext } from "react";
import axios from "../config/axios";
import useAuth from "../hooks/useAuth";
import { useState } from "react";


export const TourContext = createContext()

export default function TourContextProvider (props){

    const getTourFromGuideId = (async(guideId)=>{
        const result = await axios.get('/tour/guide',guideId)
        return result.data.tours
    })

    const getTourFromTourId = (async(tourId)=>{
        const result = await axios.get(`/tour/${tourId}`)
        return result.data.tour
    })


    return (
        <TourContext.Provider value={{getTourFromGuideId,getTourFromTourId}}>
            {props.children}
        </TourContext.Provider>
    )


}