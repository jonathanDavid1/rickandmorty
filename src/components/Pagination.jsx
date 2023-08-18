import React from 'react'

const Pagination = ({pages, setCurrentPage, currentPage}) => {
  return (
    <ul className='flex gap-4 flex-wrap justify-center'>
        {
            pages.map((page) => (<li className={`flex justify-center items-center text-xl w-9 ${currentPage === page && "bg-[#062226]"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>))
        }
      
    </ul>
  )
}

export default Pagination
