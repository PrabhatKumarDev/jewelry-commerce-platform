import React, { useState } from 'react'

const Filters = ({showFilter}) => {
    const [price, setPrice] = useState(50);
    const handleChange = (e) => {
        setPrice(e.target.value);
      };
  return (
    <>
      <div className={`w-full flex flex-col justify-center gap-10 filter-container bg-deepTeal p-8 rounded-md mt-10 ${showFilter ? "block" : "hidden"}`}>
          <h1 className="text-2xl font-bold text-white">Filters</h1>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-base text-white">Price Range</p>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="bg-ivory p-2 rounded-md"
                  onChange={handleChange}
                />
                <span className="ml-2 text-white">{price}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[20%]">
              <p className="text-base text-white">Material</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">

                <input type="checkbox" />
                <label className="text-white">Silver</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <label className="text-white">Gold</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <label className="text-white">Platinum</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[20%]">
              <p className="text-base text-white">Gemstones</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">

                <input type="checkbox" />
                <label className="text-white">Diamond</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <label className="text-white">Sapphire</label>
                </div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <label className="text-white">Emerald</label>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Filters
