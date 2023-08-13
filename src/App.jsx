
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
    <main className='bg-black min-h-screen text-white'>
    <LocationForm handleSubmit={handleSubmit} />
    <LocationInfo currentLocation={currentLocation} />
    <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation} />
    </main>
  )
}

export default App
