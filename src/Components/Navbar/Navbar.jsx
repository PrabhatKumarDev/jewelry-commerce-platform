import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Tooltip from "../Tooltip";
const Navbar = () => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (buttonRef.current) {
      buttonRef.current.className = isOpen
        ? "fa-solid fa-bars text-xl"
        : "fa-solid fa-xmark text-xl";
    }
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* Desktop Version */}
        <div className="flex bg-ivory justify-between px-10 py-4 text-charcoal items-center">
          <div className="font-bold text-2xl">H.R Jewellers</div>

          <button className="md:hidden block" onClick={handleClick}>
            <i ref={buttonRef} className="fa-solid fa-bars text-xl"></i>
          </button>

          <div className="md:block hidden">
            <ul className="flex gap-8 nav-links">
              <li className="cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/necklaces">Necklaces</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/rings">Rings</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/earrings">Earrings</Link>
              </li>
              <li className="cursor-pointer">
                <Link to="/collections">Collections</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex gap-8">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="">
              <Link to="/signup">
                <i className="fa-solid fa-user"></i>
              </Link>
            </button>
            <button className="">
              <i className="fa-solid fa-cart-shopping "></i>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-4 px-10 py-4 text-charcoal bg-ivory lg:hidden md:hidden">
            <div>
              <ul className="flex flex-col gap-4 nav-links">
                <li className="cursor-pointer w-fit"><Link to="/">Home</Link></li>
                <li className="cursor-pointer w-fit"><Link to="/necklaces">Necklaces</Link></li>
                <li className="cursor-pointer w-fit"><Link to="/rings">Rings</Link></li>
                <li className="cursor-pointer w-fit"><Link to="/earrings">Earrings</Link></li>
                <li className="cursor-pointer w-fit"><Link to="/collections">Collections</Link></li>
              </ul>
            </div>
            <div className="flex gap-8">
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <button>
                <Link to="/signup">
                  <i className="fa-solid fa-user"></i>
                </Link>
              </button>
              <button>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
