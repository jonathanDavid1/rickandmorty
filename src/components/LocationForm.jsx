import React from 'react'

const LocationForm = ( {handleSubmit} ) => {
  return (
    <form className='flex flex-row justify-center' onSubmit={handleSubmit}>
      <input
        className='text-black span-4 w-[200px] rounded-sm border-green-600 border-2 p-2'
        min={1}
        id='newLocation'
        max={126}
        placeholder='Type a location id ...'
        type='number'
        required />
      <button className='span-1 bg-green-700 border-2 border-x-1 border-green-600 border-x-1 w-auto p-2'>Search</button>
    </form>

  )
}

export default LocationForm
