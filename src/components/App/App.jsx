import { useState, useEffect } from 'react';
import axios from "axios"

import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  // useState 
  // create state component to hold the gallery list from the server/database 
  const [galleryList, setGalleryList] = useState([]);
  // useEffect to call initial get 
  useEffect(() => { getGallery() }, []);
  // HTTP GET request
  // Function to GET the gallery from the server via axios 
  // use GET to update the state held in the variable galleryList
  function getGallery() {
    axios.get('/gallery').then((response) => {
      // console.log("Successful GET", response.data);
      setGalleryList(response.data);
    }).catch((err) => {
      console.log("Error with GET:", err);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList galleryList={galleryList} getGallery={getGallery} />
    </div>
  );
}

export default App;
