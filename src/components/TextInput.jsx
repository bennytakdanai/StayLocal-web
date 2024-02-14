import React from 'react'

function TextInput({children}) {
  return (
    <div className='flex flex-col items-center gap-2'>
        <label className='text-xl'>{children}</label>
        <input 
            type='text' className='w-full bg-[#D8B998] px-3 py-2 rounded-md '
            placeholder={`${children}...`}
        />
    </div>
  )
}

export default TextInput