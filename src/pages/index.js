import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchBar from "../components/SearchBar";
import DogList from "../components/DogList";
import './index.css';

const IndexPage = () => {
  const [breeds, setBreeds] = useState([]);
  const [displayBreeds, setDisplayBreeds] = useState([]);
  const breedsAPILink = 'https://dog.ceo/api/breeds/list/all';

  // load all breeds on page load
  useEffect(() => {
    const getDogBreeds = async () => {
      const response = await axios.get(breedsAPILink);
      const breedsArray = Object.keys(response.data.message);

      setBreeds(breedsArray);
      setDisplayBreeds(breedsArray);
  
      console.log('useeffect breeds: ', breeds);
    }

    getDogBreeds();
  }, []);

  const getDogPicture = async (breed) => {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    const imageUrl = response.data.message;
    return imageUrl;
  };

  return (
    <div className="container">
      <SearchBar breeds={breeds} setDisplayBreeds={setDisplayBreeds} />
      <DogList breeds={displayBreeds} getDogPicture={getDogPicture} />
    </div>
  )
}

export default IndexPage
