import React from 'react'

function SelectBar( {optionArr,name,value,onChange} ) {
  
  return (
    <select 
      className="select select-bordered  " 
      name={name} 
      value={value}
      onChange={onChange}
            
    >
        {optionArr?.map((el,i)=>{
            if(i==0) return <option hidden key={i}>{el}</option>
            else return <option value={el} key={i}>{el}</option>
        })}
        
    </select>
  )
}

export default SelectBar