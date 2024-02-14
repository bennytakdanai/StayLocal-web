import React from 'react'

function SelectBar( {optionArr} ) {
  return (
    <select className="select select-bordered  " >
        {optionArr?.map((el,i)=>{
            if(i=0) return <option disabled selected>{el}</option>
            else return <option>{el}</option>
        })}
        
    </select>
  )
}

export default SelectBar