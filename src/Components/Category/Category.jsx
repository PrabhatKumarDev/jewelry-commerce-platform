import React from 'react'
import Cards from './Cards'
import ring from '/ring.png'
import nacklace from '/nacklace.jpg'
import earrings from '/earring.png'
import bracelet from '/bracelet.jpg'

const Category = () => {
  return (
    <div className='px-12 py-12 w-full bg-ivory h-fit flex flex-col items-center'>
      <h1 className='text-2xl font-bold text-charcoal'>Shop by Category</h1>
      <div className='flex gap-12 mt-12 flex-wrap justify-center pb-12'>
        <Cards title="Necklaces" img={nacklace}/>
        <Cards title="Earrings" img={earrings}/>
        <Cards title="Bracelets" img={bracelet}/>
        <Cards title="Rings" img={ring}/>  
      </div>
    </div>
  )
}

export default Category
