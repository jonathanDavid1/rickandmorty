import React from 'react'

const Pagination = ({pages, setCurrentPage, currentpage}) => {
  return (
    <ul className='flex gap-4 flex-wrap justify-center'>
        {
            pages.map((page) => (<li className={`rounded h-12 cursor-pointer hover:scale-110 transition-transform false ${currentpage === page && "bg-blue-500"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>))
        }
      
    </ul>
  )
}

export default Pagination
