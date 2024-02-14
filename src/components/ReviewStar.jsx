import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function ReviewStar() {
  return (
    <div className='flex gap-2'>
        <FontAwesomeIcon className=' text-yellow-300' icon={faStar} />
        <FontAwesomeIcon className=' text-yellow-300' icon={faStar} />
        <FontAwesomeIcon className=' text-yellow-300' icon={faStar} />
        <FontAwesomeIcon className=' text-yellow-300' icon={faStar} />
        <FontAwesomeIcon className=' text-white' icon={faStar} />
    </div>
  )
}

export default ReviewStar