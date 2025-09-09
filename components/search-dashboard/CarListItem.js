import React from 'react'
import Image from 'next/image'

function CarListItem({ car }) {
  return (
    <div className='flex items-center gap-4 mt-5 border-b-[1px] border-gray-300 pb-4'>
      <Image 
        src={car.image} 
        alt={car.name}
        width={80} 
        height={80} 
        className='object-contain' 
      />
      <div>
        <h3 className='text-[18px] font-semibold'>{car.name}</h3>
        <p className='text-[16px]'>{car.desc}</p>
      </div>
    </div>
  )
}

export default CarListItem
