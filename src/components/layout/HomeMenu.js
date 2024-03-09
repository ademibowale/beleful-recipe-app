import React from 'react'
import MenuItem from "@/components/menu/MenuItem";



function HomeMenu() {
  return (
  <section className=''>
  <div className='absolute left-0 right-0 w-full justify-start '>
    <div className='absolute left-0 -top-[70px] text-left -z-10'>
        <img src={'/sallad1.png'} width={109} height={189} alt={'salad'}/>
    </div>
    <div className='absolute -top-[100px] right-10 -z-10'>
        <img src={'/sallad2.png'} width={107} height={195} alt={'salad'}/>
    </div>
    </div>
    <div className=' text-center mb-4'>
      <h3 className=' uppercase text-gray-600 font-semibold leading-4'>Checkout </h3>
      <h2 className='text-primary font-bold text-4xl italic'>Menu</h2>
    </div>
<div className='grid grid-cols-3 gap-4'>
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    </div>    
  </section>
  )
}

export default HomeMenu
