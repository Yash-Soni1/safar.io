import CarsListData from '@/utils/CarsListData'
import React from 'react'
import CarListItem from './CarListItem'

function CarListOptions() {
  return (
    <div className='mt-5 p-6 border-[2px] border-black rounded-xl'>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarsListData.map((item) => (
        <CarListItem key={item.id} car={item} />
      ))}
    </div>
  )
}

export default CarListOptions
