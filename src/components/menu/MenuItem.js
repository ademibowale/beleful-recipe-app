import React from 'react'

function MenuItem() {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center
    group hover:bg-green-500 hover:shadow-md hover:shadow-black/50 transition-all'>
        <div className='text-center '>
        <img  className="rounded-full max-h-auto max-h-24 block mx-auto "
         src='eba.png' alt='wrapp of eba'/>
        </div>
        <h4 className='font-semibold text-xl my-3'>Wrap of Eba with vegetable</h4>
        <p className='text-gray-500 text-sn'> This is a africa dish eba with vegetable soup efo sokoyokoto</p>
        <button className=' mt-4  bg-primary  text-white rounded-full px-8 py-2'>
        Add to cart <span> NGN </span> 3000 </button>

    </div>
  )
}

export default MenuItem
