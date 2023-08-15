
import { useEffect, useState } from 'react';
import './App.css'
import { getRandomDimension } from './utils/random';
import axios from 'axios';
import LocationInfo from './components/LocationInfo';
import LocationForm from './components/LocationForm';
import ResidentList from './components/ResidentList';

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e)=> {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    fetchDimension(newLocation) 

  }
  const fetchDimension = (idLocation) => {  
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
   
    axios
      .get(url)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err));

  }

  useEffect(() => {
    const randomDimension = getRandomDimension(126)
    fetchDimension(randomDimension)
  }, []);

  return (
    <section className='bg-black text-white grid'>

      <header className='bg[url("./images/background-header.png")]'>
        <div className='bg-cover bg-center h-[300px] flex justify-center items-center'>
          <img className='absolute w-[240px] animate-spin-slow' src="./images/sol-completo.png" alt="" />
          <img className='relative w-[450px] h-[300px]' src="./images/sombra.png" alt="" />
          <img className='absolute w-[300px]' src="./images/logo.png" alt="" />

        </div>
        <div>
          <LocationForm handleSubmit={handleSubmit} />
        </div>
    </header>
      <main>
        <LocationInfo currentLocation={currentLocation} />
        <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation} />
      </main>

    </section>
  )
}

export default App
