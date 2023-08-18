import React from 'react'

const LocationForm = ( {handleSubmit} ) => {
  return (
    <form className='flex justify-center h-[50px]' onSubmit={handleSubmit}>
      <input
        className='text-black span-4 w-[200px] rounded-sm border-green-500 border-[3px] p-2'
        min={1}
        id='newLocation'
        max={126}
        placeholder='Type a location id ...'
        type='number'
        required />
      <button className='flex gap-2 span-1 bg-green-700 border-y-[3px] border-r-[3px] border-green-500 border-x-1 w-auto p-2'> <span className='text-xl p-l-[1px] p-[2px]'>Search </span><div className='h-[40px] object-cover'><img src='icon-search.svg'></img></div> </button>
    </form>

  )
}

export default LocationForm
