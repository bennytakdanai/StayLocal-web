import React from 'react'

function SelectBar( {optionArr,name,value} ) {
  
  return (
    <select 
      className="select select-bordered  " 
      name={name} 
    >
        {optionArr?.map((el,i)=>{
            if(i=0) return <option disabled selected>{el}</option>
            else return <option value={el}>{el}</option>
        })}
        
    </select>
  )
}

export default SelectBar