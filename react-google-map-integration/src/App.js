import { useState } from 'react';
import './App.css';
import SearchLocationInput from './components/GooglePlacesApi'
import MapComponent from './components/Map';
function App() {
  const [selectedLocation, setSelectedLocation]=useState({
    lat:28.7041,
    lng:77.1025
  });
  return (
    <>
      <SearchLocationInput setSelectedLocation={setSelectedLocation}/>
      <MapComponent selectedLocation={selectedLocation}/>
    </>
  );
}

export default App;
