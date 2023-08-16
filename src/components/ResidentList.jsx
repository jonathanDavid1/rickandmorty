import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'
import Pagination from './Pagination';

const INITIAL_PAGE =1

const ResidentList = ( {residents, currentLocation}) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
//cantidad de residentes por pagina
  const RESIDENTS_PER_PAGE = 20;

//cantidad total de paginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

// Residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage-1)*RESIDENTS_PER_PAGE
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
  const residentsInPage =  residents.slice(sliceStart, sliceEnd)

  //Generacion del arreglo de las paginas que se van a mostrar
  const pages = []
  for(let i = 1; i <= totalPages; i++){
    pages.push(i)
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE)
  }, [currentLocation])
  



  return (
    <section className='grid grid-rows-[auto-auto] place-items-center gap-20 max-w-[1024px] w-full'>
      <section className="grid gap-8 grid-cols-[repeat(auto-fit,_260px)] place-items-center w-full justify-center mx-auto">
        {
          residentsInPage.map((resident) => <div className='w-[260px] h-80 grid grid-rows-[auto,auto] place items center select-none'><ResidentCard key={resident} residentUrl={resident} /></div> )
        }
      </section>

      <section>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </section>


    </section>
  )
}

export default ResidentList
