import React from 'react'

function SelectDate() {
    let date = new Date()

  return (
    <input 
      type='date' 
      min={new Date().toJSON().slice(0, 10)}

    >
    </input>
  )
}

export default SelectDate