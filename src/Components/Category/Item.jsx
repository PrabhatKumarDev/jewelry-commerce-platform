import React, { useState, useRef } from "react";

const Item = ({ item }) => {
const icon=useRef(null);
  const [changeImage, setChangeImage] = useState(false);
  const handleMouseEnter = () => {
    setChangeImage(true);
  };
  const handleMouseLeave = () => {
    setChangeImage(false);
  };
  const handleClick = () => {
    if(icon.current.classList.contains('fa-regular')){
      icon.current.classList.remove('fa-regular');
      icon.current.classList.add('fa-solid');
    }
    else{
      icon.current.classList.remove('fa-solid');
      icon.current.classList.add('fa-regular');
    }
  };
  return (
    <>
      <div
        className="item w-[40rem] h-[40rem] bg-ivory rounded-lg relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className=" aspect-square w-full h-full overflow-hidden rounded-lg relative">
        <div className="flex">
            <img
              src={item.image}
              alt={item.name}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                changeImage ? 'translate-x-[-100%]' : ''
              }`}
            />
            <img
              src={item.secondaryImage}
              alt={item.name}
              className={`w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 transition-transform duration-500 ${
                changeImage ? 'translate-x-0' : 'translate-x-[100%]'
              }`}
            />
          </div>
          <h1 className="tex-2xl font-bold absolute bottom-0 left-0 right-0  item-text p-2">
            {item.name}
          </h1>
        </div>
        <i className="absolute fa-regular fa-heart text-xl cursor-pointer top-8 right-8 " ref={icon} onClick={handleClick}></i>
      </div>
    </>
  );
};

export default Item;
