import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ResidentCard = ( {residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const residentStatus = {
      Alive : "bg-green-500",
      Dead: "bg-red-500",
      unknown: "bg-slate-500"
    }

    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({data}) => setResidentInfo(data))
            .catch((err) => console.log(err))
    }, []);
  return (
    <article className='grid'>
      <header className='w-[300px] h-auto border-green-500 border-[3px] relative'>
        <div>
        <img src={residentInfo?.image} alt="" />
        </div>
        <div className='flex items-center justify-center gap-2 p-2 border-green-500 border-[3px] w-[110px] h-[30px] bg- absolute top-[200px] left-[105px] bg-black opacity-60 z-10'>
          <div className={`h-[10px] bg-green-500 aspect-square rounded-full p-2 ${residentStatus[residentInfo?.status]} `}></div>
          {residentInfo?.status}
        </div>
      </header>
      <section className='border-green-500 border-x-[3px] border-b-[3px] bg-[#062226]/50 p-3'>
        <h3 className='text-2xl'>{residentInfo?.name}</h3>
        <ul>
            <li> <span className='text-gray-400'>Species: </span>{residentInfo?.species}</li>
            <li> <span className='text-gray-400'>Origin: </span>{residentInfo?.origin.name}</li>
            <li> <span className='text-gray-400'>Times appear: </span>{residentInfo?.episode.length} </li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard
