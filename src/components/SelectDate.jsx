import React from 'react'

function SelectDate(name,onchange,value) {

  return (
    <input 
      type='date' 
      min={new Date().toJSON().slice(0, 10)}
      name={name}
      onChange={onchange}
      value={value}

    >
    </input>
  )
}

export default SelectDate