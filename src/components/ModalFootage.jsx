import React from 'react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight,faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function ModalFootage({onclose,onSaveFootage}) {
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

    const handleSave = () =>{

    }

    const handleChooseFile = (e) =>{
        const selectedFile = e.target.files[0]
        const newFootages = [...footages]
        newFootages[footageIndex] = selectedFile
        console.log(newFootages)
        setFootage(newFootages)
        // setFootage(footages=>footages[footageIndex] = e.target.files[0])
        // console.log(URL.createObjectURL(footages[footageIndex]))
        // console.log(e.target.files[0])
    }

  return (
    <div>
        <div className="fixed bg-white inset-0 opacity-60" ></div>
        <div className="fixed inset-0 flex items-center justify-center" >
            <div className="flex flex-col gap-10 w-full h-full items-center bg-white rounded-lg shadow-lg border-2 p-10 " >        
                <div className=" text-4xl text-center">Add Footage</div>
                
                <div className='flex justify-evenly items-center w-full'>
                <FontAwesomeIcon 
                    className=' text-5xl hover:cursor-pointer' icon={faCaretLeft} 
                    onClick={handlePrev}
                />
                {/* have footage? */}
                {footages[footageIndex]
                    ?
                // picture or video? 
                (
                    footages[footageIndex].type.startsWith('image/')
                        ?
                    <img 
                        className='w-5/6 aspect-video relative'
                        src={URL.createObjectURL(footages[footageIndex])} alt='s'
                    />
                        :
                    <video className='w-5/6 aspect-video relative' controls>
                        <source src={URL.createObjectURL(footages[footageIndex])} type="video/mp4"/>
                    </video>
                )
                
                    :
                // button to add footage 
                <div className=' w-5/6 bg-gray-500 aspect-video flex items-center justify-center' >
                    <label 
                        htmlFor="tourProfileImage"
                        className='p-10 bg-slate-200 hover:cursor-pointer'
                    >Click To Add Footage {footageIndex+1} </label>
                    <input 
                        type='file' id="tourProfileImage" 
                        accept="image/png, image/jpeg, video/mp4"
                        className=' hidden'
                        onChange={handleChooseFile}
                    />
                    
                </div>
                }

                <FontAwesomeIcon 
                    className=' text-5xl hover:cursor-pointer' icon={faCaretRight} 
                    onClick={handleNext}
                />
                        
                </div>
            <div className='flex gap-3 mt-5'>
                    <Button onclick={()=>onSaveFootage(footages)} >Save</Button>
                    <Button onclick={onclose}>Close</Button>

            </div>
            </div>
                  
        </div>
    </div>
  )
}

export default ModalFootage