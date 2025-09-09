"use client"

import { useContext, useEffect, useState } from "react"
import { Locate, MapPin } from "lucide-react"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from "@/context/SourceContext"
import { DestinationContext } from "@/context/DestinationContext"

export default function InputItem({ type }) {
  const [value, setValue] = useState(null);
  const [mounted, setMounted] = useState(false)
  const {source, setSource} = useContext(SourceContext);
  const {destination, setDestination} = useContext(DestinationContext);

  useEffect(() => {
    setMounted(true)
  }, [])

const getLatAndLng = (place, type) => {
  if (!place || !place.value || !place.value.place_id) {
    return;
  }

  const placeId = place.value.place_id;
  const service = new window.google.maps.places.PlacesService(
    document.createElement("div")
  );

  service.getDetails({ placeId }, (result, status) => {
    if (
      status === "OK" &&
      result.geometry &&
      result.geometry.location
    ) {
      const lat = result.geometry.location.lat();
      const lng = result.geometry.location.lng();

      if (type === "source") {
       setSource({ 
        lat: lat, 
        lng: lng,
        name: result.formatted_address,
        label: result.name
       });
      } else if (type === "destination") {
        setDestination({
          lat: lat,
          lng: lng,
          name: result.formatted_address,
          label: result.name
        });
      }
    }
  });
};


  if (!mounted) return null 

  return (
    <div className="bg-slate-200 p-3 rounded-lg flex items-center gap-3 mt-5">
      {type === 'source' ? <Locate /> : <MapPin />}
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: (place) => { getLatAndLng(place, type); setValue(place); },
          placeholder: `Enter ${type === 'source' ? 'Pickup' : 'Destination'} Location`,

          isClearable: true,
          className: 'border-none outline-none flex-1',
          components: { DropdownIndicator: false },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
            })
          }
        }}
      />
    </div>
  )
}
