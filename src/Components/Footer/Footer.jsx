import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-full bg-charcoal h-fit  py-12 px-12 flex justify-between flex-wrap'>
      <div className='flex flex-col '>
        <h1 className='text-white text-base font-bold py-4'>About Us</h1>
        <p className='text-white text-sm'>Crafting timeless elegance through exquisite jewelry designs since 1973.</p>
      </div>
      <div className='flex flex-col '>
        <h1 className='text-white text-base font-bold py-4'>Customer Service</h1>
       <ul className='flex flex-col gap-2'>
        <li className='text-white text-sm hover:text-gold cursor-pointer'>Contact Us</li>
        <li className='text-white text-sm hover:text-gold cursor-pointer'>Shipping & Returns</li>
        <li className='text-white text-sm hover:text-gold cursor-pointer'>FAQ</li>
       </ul>
      </div>
      <div className='flex flex-col '>
        <h1 className='text-white text-base font-bold py-4'>My Account</h1>
       <ul className='flex flex-col gap-2'>
        <li className='text-white text-sm hover:text-gold cursor-pointer'><Link to="/login">Login</Link></li>
        <li className='text-white text-sm hover:text-gold cursor-pointer'>Order History</li>
        <li className='text-white text-sm hover:text-gold cursor-pointer'>Wishlist</li>
       </ul>
      </div>
      <div className='flex flex-col '>
        <h1 className='text-white text-base font-bold py-4'>Follow Us</h1>
        <div className='flex gap-4 flex-wrap'>
          <i className="fa-brands fa-instagram text-white text-2xl hover:text-gold cursor-pointer"></i>
          <i className="fa-brands fa-facebook text-white text-2xl hover:text-gold cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-white text-2xl hover:text-gold cursor-pointer"></i>
          <i className="fa-brands fa-pinterest text-white text-2xl hover:text-gold cursor-pointer"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
