import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import DogList from "../components/DogList";

// markup
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

  // filter by term on term update
  // useEffect(() => {
  //   console.log('useeffect breeds: ', breeds);

  //   // if(term === '') {

  //   // }

  //   const filterDogBreeds = async () => {
  //     const response = await axios.get(`https://dog.ceo/api/${term}`);
  //     console.log('filter response: ', response);
  //     // setBreeds(response.data.message);
  
  //     // console.log(breeds);
  //   }

  //   filterDogBreeds();


  // }, [term]);


  const onInputChange = async (term) => {
    setDisplayBreeds(term);

    const getDogBreed = async () => {
      const response = await axios.get(`https://dog.ceo/api/breed/${term}/images/random`);
  
      console.log('on term submit: ', breeds);
    }

    getDogBreed();
  };

  const getDogPicture = async (breed) => {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    const imageUrl = response.data.message;
    // console.log('get dog picture: ', imageUrl);
    return imageUrl;
  };

  return (
    <div className="container">
      <SearchBar onChange={onInputChange} breeds={breeds} setDisplayBreeds={setDisplayBreeds} />
      {/* <Dropdown breeds={breeds} term={term} setTerm={setTerm} /> */}

      <DogList breeds={displayBreeds} getDogPicture={getDogPicture} />
    </div>
  )
}

export default IndexPage
