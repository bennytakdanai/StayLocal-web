import React from 'react'

function Button({children}) {
  return (
    <button className=' bg-[#F87825] hover:bg-[#DF6B20] p-3 rounded-md text-white w-[250px] h-[70]'>{children}</button>
  )
}

export default Button