import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus,faCircleMinus } from '@fortawesome/free-solid-svg-icons'

function PlusMinus() {
  return (
    <div className='flex gap-2'>
        <FontAwesomeIcon icon={faCirclePlus} />
        33
        <FontAwesomeIcon icon={faCircleMinus} />
    </div>
  )
}

export default PlusMinus