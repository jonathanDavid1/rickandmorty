import React from 'react'

const LocationInfo = ( {currentLocation}) => {
  return (
      <section className='grid items-center justify-center gap-4 m-4'>
          <h2 className='text-green-600 grid-cols-3 p-6 m-auto'>¡Welcome to {currentLocation?.name}!</h2>
          <ul className='flex justify-center gap-4'>
              <li> <span className='text-gray-400'>Type: </span>{currentLocation?.type}</li>
              <li> <span className='text-gray-400'>Dimention: </span>{currentLocation?.dimension}</li>
              <li> <span className='text-gray-400'>Population: </span>{currentLocation?.residents.length}</li>
          </ul>

      </section>
  )
}

export default LocationInfo
