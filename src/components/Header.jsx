import React from 'react'
import shoe_image from '../assets/shoe_image.png'

function Header() {
  return (
    <div className='flex max-w-[1125px] justify-around mx-[157px] mt-[50px]'>
        {/* text section */}
        <div className='flex-col max-w-[595px] text-left gap-[36px]'>
            <h1 className='text-8xl font-bold '>YOUR FEET DESERVE THE BEST</h1>
            <div className='w-[404px]'>
            <p className='text-[gray] text-md font-semibold'>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <div>
            <button className='bg-[red] text-white py-[6px] px-[16px] border-none font-semibold'>
            Shop Now
            </button>
            <button className='bg-transparent border-black text-[gray]  py-[6px] px-[16px] font-semibold'>
            Category
            </button>
            </div>
        </div>
        {/* image section */}
        <div className=' '>
            <img className='hidden sm:inline-block' src={shoe_image} alt="" />
        </div>
    </div>
  )
}

export default Header