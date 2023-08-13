import React from 'react'

const Pagination = ({pages, setCurrentPage, currentpage}) => {
  return (
    <ul>
        {
            pages.map((page) => (<li className={`text-2xl ${currentpage === page && "text-red-500"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>))
        }
      
    </ul>
  )
}

export default Pagination
