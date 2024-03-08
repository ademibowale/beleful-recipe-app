import React from 'react'
import Right from "@/components/icons/Right";

function Hero() {
  return (
    <section className='hero md:mt-4'>
     <div className='py-8 md:py-12'>
    <h1 className='text-4xl font-semibold'>Everything is better
        with our&nbsp;
        <span className="text-primary">
          Igbadun Foods
        </span>
      </h1>
      <p className='my-6 text-gray-500 text-sm' >Igbadun is the missing piece that makes every day complete,
         a simple yet delicious joy in life
      </p>
      <div className='flex gap-4 text-sm' >
        <button className='flex justify-center items-center gap-2 px-4 py-2 bg-primary uppercase text-white rounded-full
        '>
        Order Now
          <Right />
        </button>
        <button className='flex items-center gap-2 py-2 bolder-0 text-gray-600 font-semibold' >
         Learn More
          <Right/>
        </button>
      </div>      </div>
      <div className='relative hidden md:block'>
        <img src={"/pizza.png"} alt={"Chicken Legs with Jollof"}   />
      </div>
    </section>
  )
}

export default Hero
