import axios from '../../config/axios'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight,faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useState } from 'react'

function FootagePreview({tourId}) {
    const [footages,setFootage] = useState([])
    const [footageIndex,setFootageIndex] = useState(0)



    const handlePrev = () =>{
        if(footageIndex > 0){
            setFootageIndex(footageIndex-1)
        }
    }
    
    const handleNext =() =>{
        if(footageIndex < 4){
            setFootageIndex(footageIndex+1)
        }
        
    }

    useEffect(()=>{
        const getFootage = async(tourId) =>{
            try{
                const result = await axios.get(`/footage/${tourId}`)
                setFootage(result.data.footages)
                console.log(result)
            }catch(err){
                console.log(err)
            }
        }
        getFootage(tourId)
    },[])

  return (
    
        <div className='flex justify-evenly items-center w-full border-red-600'>
                <FontAwesomeIcon 
                    className=' text-5xl hover:cursor-pointer' icon={faCaretLeft} 
                    onClick={handlePrev}
                />
                {
                    footages[footageIndex]?.isVideo
                        ?
                    <video className='w-5/6 aspect-video relative' controls>
                        <source src={footages[footageIndex]?.footageLink} type="video/mp4"/>
                    </video>
                        :
                    <img 
                        className='w-5/6 aspect-video relative'
                        src={footages[footageIndex]?.footageLink} alt='image'
                    />
                }

                <FontAwesomeIcon 
                    className=' text-5xl hover:cursor-pointer' icon={faCaretRight} 
                    onClick={handleNext}
                />
                        
                </div>
    
  )
}

export default FootagePreview