import React from 'react'

const Pagination = ({pages, setCurrentPage, currentPage}) => {
  return (
    <ul className='flex gap-4 flex-wrap justify-center  mt-10 mb-10 mx-5'>
        {
            pages.map((page) => (<li className={`bg-green-500 rounded-sm m-auto p-1  font-bold items-center justify-center   cursor-pointer hover:scale-110 transition-transform false ${currentPage === page && "bg-blue-500"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>))
        }
      
    </ul>
  )
}

export default Pagination
