import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function ReviewStar() {
  const [reviewScore,setReviewScore] = useState(0)
  
  return (
    <div className='flex gap-2'>
        <FontAwesomeIcon className={reviewScore >= 1 ?' text-yellow-300':'text-gray-200'} icon={faStar} onClick={()=>setReviewScore(1)}/>
        <FontAwesomeIcon className={reviewScore >= 2 ?' text-yellow-300':'text-gray-200'} icon={faStar} onClick={()=>setReviewScore(2)}/>
        <FontAwesomeIcon className={reviewScore >= 3 ?' text-yellow-300':'text-gray-200'} icon={faStar} onClick={()=>setReviewScore(3)}/>
        <FontAwesomeIcon className={reviewScore >= 4 ?' text-yellow-300':'text-gray-200'} icon={faStar} onClick={()=>setReviewScore(4)}/>
        <FontAwesomeIcon className={reviewScore >= 5 ?' text-yellow-300':'text-gray-200'} icon={faStar} onClick={()=>setReviewScore(5)}/>
    </div>
  )
}

export default ReviewStar