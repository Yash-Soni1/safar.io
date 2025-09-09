import CarsListData from '@/utils/CarsListData'
import React, { useState } from 'react'
import CarListItem from './CarListItem'
import { useRouter } from 'next/navigation';

function CarListOptions({ distance }) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedCar, setSelectedCar] = useState();

  const router = useRouter();

  return (
    <div className='mt-3 p-5 rounded-xl overflow-auto h-[250px]'>
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarsListData.map((item, index) => (
        <div className={`cursor-pointer p-2 rounded-md mt-2 px-4  ${activeIndex == index ? 'border-[3px] border-[#FFCC00]' : null}`}
          onClick={() => { setActiveIndex(index), setSelectedCar(item) }}
        >
          <CarListItem key={item.id} car={item} distance={distance} />
        </div>
      ))}

      {selectedCar?.name ?

        <div className='flex justify-between fixed bottom-0 bg-white p-2 mb-2 mt-2 shadow-xl w-full md:w-[30%] border-[1px] items-center rounded-xl'>
          <h2>Make Payment For</h2>
          <button className='p-3 bg-[#FE9A00] text-white rounded-xl' 
            onClick={() => router.push('/payment?amount='+(selectedCar.amount*distance).toFixed(2))}
          >Request {selectedCar.name}</button>
        </div> : null
        
      }
    </div>
  )
}

export default CarListOptions
