"use client"

import React, { useEffect, useState } from 'react'
import InputItem from './InputItem'
import { useContext } from 'react'
import { SourceContext } from "@/context/SourceContext"
import { DestinationContext } from "@/context/DestinationContext"
import CarListOptions from './CarListOptions'

function SearchSection() {
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [distance, setDistance] = useState(0);

  const calculateDistance = () => {
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      {
        lat: source.lat,
        lng: source.lng
      },
      {
        lat: destination.lat,
        lng: destination.lng
      }
    );
    console.log(dist * 0.001 + " km");
    setDistance(dist * 0.001);
  }

  useEffect(() => {
    if (source) {
      console.log(source);
    }
    if (destination) {
      console.log(destination);
    }
  }, [source, destination]);

  return (
    <div>
      <div className='p-2 md:p-6 border-[2px] border-black rounded-xl'>
        <p className='text-[20px] font-bold'>Get a Ride</p>
        <InputItem type='source' />
        <InputItem type='destination' />
        <button onClick={() => calculateDistance()} className='p-3 bg-amber-500 hover:bg-amber-400 text-black rounded-lg mt-5 w-full'>Search</button>
      </div>
      {distance ? <CarListOptions distance={distance} /> : null}
    </div>
  )
}

export default SearchSection