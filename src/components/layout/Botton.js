import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#38bdf8] text-black font-bold rounded-full py-1 px-6  hover:bg-white duration-500'>
      {props.children}
    </button>
  )
}

export default Button