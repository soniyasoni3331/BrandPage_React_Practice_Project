import React from 'react'
import shoe_image from '../assets/shoe_image.png'
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'

function Header() {
  return (
    <div className='flex flex-col md:flex-row max-w-[1125px] justify-center mx-[157px] mt-[50px]'>

        {/* text section */}

        <div className='flex flex-col max-w-[595px] h-[613px] text-center md:text-left gap-y-9'>
          <div className=''>
            <h1 className='text-7xl font-bold '>YOUR FEET DESERVE THE BEST</h1>
          </div>
            <div className='w-[404px]'>
            <p className='text-[gray] text-md font-semibold'>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <div className='flex flex-col  md:flex-row gap-x-10 gap-y-3'>
            <button className='bg-[red] text-white py-[6px] px-[16px] border-none font-semibold'>
            Shop Now
            </button>
            <button className='bg-transparent border border-black text-[gray]  py-[6px] px-[16px] font-semibold'>
            Category
            </button>
            </div>
            <div className='sm:flex sm:flex-col sm:gap-y-4 hidden md:block'>
              <p className='text-[gray]'>Also Available On</p>
              <div className='flex items-center gap-x-4'>
                <img className='h-[32px] w-[32px]' src={flipkart} alt="flipcard logo" />
                <img className='h-[32px] w-[32px]' src={amazon} alt="amazon logo" />
              </div>
            </div>
        </div>

        {/* image section */}

        <div className='mt-8 md:mt-0'>
            <img className='h-[487.06px] w-[530px]' src={shoe_image} alt="shoe image" />
        </div>
    </div>
  )
}

export default Header