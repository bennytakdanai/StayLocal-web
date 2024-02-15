import React from 'react'

function TextInput({type,placeholder,onchange,value,name,inputerr}) {
 
  return (
    <div className='flex flex-col items-center '>
        <label className='text-xl mt-2'>Enter {name}</label>
        <input 
            className='w-450 bg-[#D8B998] px-3 py-2 rounded-md mt-2'
            placeholder={placeholder}
            onChange={onchange}
            value={value}
            name={name}
            type={type}
        />
        {inputerr?<small className=' text-red-600'>{inputerr}</small>:<></>}
    </div>
  )
}

export default TextInput