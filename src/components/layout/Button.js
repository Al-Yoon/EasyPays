import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#38bdf8] text-black font-bold py-2 px-6 rounded md:ml-8 hover:bg-white
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
