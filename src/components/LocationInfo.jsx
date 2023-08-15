import React from 'react'

const LocationInfo = ( {currentLocation}) => {
  return (
      <section className='grid items-center justify-center gap-4'>
          <h2 className='text-green-600 grid-cols-3 p-6'>¡Welcome to {currentLocation?.name}!</h2>
          <ul className='flex justify-center gap-4'>
              <li>Type: {currentLocation?.type}</li>
              <li>Dimention: {currentLocation?.dimension}</li>
              <li>Population: {currentLocation?.residents.length}</li>
          </ul>

      </section>
  )
}

export default LocationInfo
