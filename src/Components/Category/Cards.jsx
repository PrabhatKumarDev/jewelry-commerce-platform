import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({title, img}) => {
  return (
    <div className='sm:w-[22rem] md:w-[25rem] lg:w-[27.2rem] bg-white p-md rounded-lg cards flex flex-col items-center'>
      <img src={img} alt='category' className='w-[15rem] md:w-[20rem] lg:w-[27.2rem] h-[20rem] object-contain mx-auto ' />
      <h1 className='text-2xl font-bold text-charcoal'>{title}</h1>
      <button className='mt-6 text-white px-4 py-2 rounded-md'><Link to={`/${title.toLowerCase()}`}>Shop Now</Link></button>
    </div>
  )
}

export default Cards
