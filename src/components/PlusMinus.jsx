import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus,faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function PlusMinus({props}) {
  
  const [count,setCount,groupSizeLeft] = props
  
  return (
    <div className='flex gap-2'>
        <FontAwesomeIcon 
          onClick={()=> setCount(count==groupSizeLeft? groupSizeLeft :count+1)} 
          icon={faCirclePlus} 
        />
        {count}
        <FontAwesomeIcon 
          onClick={()=> setCount(count==1? 1 :count-1)} 
          icon={faCircleMinus} 
        />
    </div>
  )
}

export default PlusMinus