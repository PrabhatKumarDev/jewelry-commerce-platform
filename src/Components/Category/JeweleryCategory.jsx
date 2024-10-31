import React, { useState } from "react";
import Filters from "./Filters";
import Item from "./Item";
import necklaceData from "./necklaceData";
const JeweleryCategory = () => {
  const [showFilter, setShowFilter] = useState(false);
  const handleClick = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <div className="w-full h-full bg-softGray text-deepTeal mt-20 px-10 py-10 flex flex-col items-center">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2 cursor-pointer active:scale-95 transition-all duration-300" onClick={handleClick}>
            <i className="fa-solid fa-filter"></i>
            <p className="text-sm">Filter</p>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-ivory p-2 rounded-md border-charcoal border-2">
              <option value="">Sort by:Featured</option>
              <option value="">Price:Low to High</option>
              <option value="">Price:High to Low</option>
              <option value="">Newest First</option>
            </select>
          </div>
        </div>
        <Filters showFilter={showFilter} />
        <div className="items-container w-full h-fit rounded-md mt-10 px-10 py-10 flex flex-wrap gap-8 justify-center">
          {necklaceData.map((item) => (
            <Item key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default JeweleryCategory;
