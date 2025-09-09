import React from 'react'
import Image from 'next/image'
import { ArrowRight, User } from 'lucide-react'

function CarListItem({ car, distance }) {
  return (
    <div className='pb-4'>
      <div className='flex items-center gap-4 mt-5 p-2'>
        <Image 
        src={car.image} 
        alt={car.name}
        width={80} 
        height={80} 
        className='object-contain' 
      />
      <div className='max-w-[190px]'>
        <h3 className='text-[18px] flex items-center justify-start font-semibold'>{car.name} <ArrowRight className='h-4' /> <span className='text-gray-600 text-[14px]'>{car.seats} seats</span> </h3>
        <p className='text-[16px]'>{car.desc}</p>
      </div>
      <div className='text-right'>
        <p className='text-[18px] font-semibold'>₹{(car.amount * distance).toFixed(2)}</p>
      </div>
      </div>
    </div>
  )
}

export default CarListItem
