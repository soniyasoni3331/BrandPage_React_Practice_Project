import React from 'react'
import brand_logo from '../assets/brand_logo.png'

const menu = [
    {
        id: 1,
        name: "menu",
    },
    {
        id: 2,
        name: "location",
    },
    {
        id: 3,
        name: "about",
    },
    {
        id: 4,
        name: "contact",
    },
]

function Navbar() {
  return (
    <nav className='flex justify-between items-center max-w-[1280px] h-[72px] m-auto'>
        {/* logo section */}
        <div className=''>
            <img className='w-[76px] h-[42.75px]' src={brand_logo} alt="Logo" />
        </div>
        {/* menu bar section */}
        <div>
            <ul className='uppercase flex gap-[24px] text-sm'>
            {
                menu.map((list)=>(
                    <li className='cursor-pointer text-[gray] font-semibold' key={list.id}>{list.name}</li>
                ))
            }
            </ul>
        </div>
        {/* login button section */}
        <button className='bg-[red] text-white py-[6px] px-[16px] border-none font-semibold'>
            Login
        </button>

    </nav>
  )
}

export default Navbar