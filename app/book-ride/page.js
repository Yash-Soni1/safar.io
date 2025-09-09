"use client"

import React from 'react'
import Navbar from '@/components/Navbar' 
import GoogleMapsSection from '@/components/search-dashboard/GoogleMapsSection'
import SearchSection from '@/components/search-dashboard/searchSection'
import { SourceContext } from "@/context/SourceContext"
import { DestinationContext } from "@/context/DestinationContext"
import { useState } from "react"
import { LoadScript } from '@react-google-maps/api'

function page() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);

  return (
    <>
    <Navbar />
      <SourceContext.Provider value={{ source, setSource }}>
        <DestinationContext.Provider value={{ destination, setDestination }}>
          <LoadScript googleMapsApiKey={"AIzaSyDX_Em8PookP9JQqEAfcXHId343XAKRdjU"} libraries={['places']}>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <SearchSection />
            </div>
            <div className='col-span-2'>
              <GoogleMapsSection />
            </div>
          </div>
          </LoadScript>
        </DestinationContext.Provider>
      </SourceContext.Provider>
    </>
  )
}

export default page