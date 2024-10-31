import React, { useState, useRef } from 'react'

const Navbar = () => {
    const buttonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
        if (buttonRef.current) {
            buttonRef.current.className = isOpen ? "fa-solid fa-bars text-xl" : "fa-solid fa-xmark text-xl";
        }
    }
  return (
    <>
    <nav>
    {/* Desktop Version */}
    <div className='flex bg-ivory justify-between px-10 py-4 text-charcoal items-center'>
      <div className='font-bold text-2xl'>H.R Jewellers</div>

      <button className='md:hidden block'  onClick={handleClick}>
        <i ref={buttonRef} className="fa-solid fa-bars text-xl"></i>
      </button>

      <div className='md:block hidden'>
        <ul className='flex gap-8 nav-links'>
          <li className='cursor-pointer'><a href='#'>Home</a></li>
          <li className='cursor-pointer'><a href='#'>Necklaces</a></li>
          <li className='cursor-pointer'><a href='#'>Rings</a></li>
          <li className='cursor-pointer'><a href='#'>Earrings</a></li>
          <li className='cursor-pointer'><a href='#'>Collections</a></li>
        </ul>
      </div>
      <div className='hidden md:flex gap-8'>
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button>
          <i className="fa-solid fa-user"></i>
        </button>
        <button>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>

    {isOpen && (    
    <div className='flex flex-col gap-4 px-10 py-4 text-charcoal bg-ivory lg:hidden md:hidden'>
        <div>
            <ul className='flex flex-col gap-4 nav-links'>
                <li className='cursor-pointer w-fit'>Home</li>
                <li className='cursor-pointer w-fit'>Necklaces</li>
                <li className='cursor-pointer w-fit'>Rings</li>
                <li className='cursor-pointer w-fit'>Earrings</li>
                <li className='cursor-pointer w-fit'>Collections</li>
            </ul>
        </div>
        <div className='flex gap-8'>
            <button>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button>
                <i className="fa-solid fa-user"></i>
            </button>
            <button>
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
    )}
    </nav>
    </>
  )
}

export default Navbar
