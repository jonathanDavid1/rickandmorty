import React from 'react'

const LocationInfo = ( {currentLocation}) => {
  return (
      <section>
          <h2>{currentLocation?.name}</h2>
          <ul>
              <li>Type: {currentLocation?.type}</li>
              <li>Dimention: {currentLocation?.dimension}</li>
              <li>Population: {currentLocation?.residents.length}</li>
          </ul>

      </section>
  )
}

export default LocationInfo
