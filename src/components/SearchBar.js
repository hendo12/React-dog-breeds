import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ breeds, setDisplayBreeds }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
   
    let searchTerm = event.target.value.toLowerCase();
    let showBreeds = [];
    breeds.filter((breed) => {
        if(breed.indexOf(searchTerm) > -1) {
            showBreeds.push(breed);
        }
    });

    setDisplayBreeds(showBreeds);
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
        <form className="breedsForm">
            <div className="field">
            <label htmlFor="breed">Dog Breeds</label>
            <input
                type="text"
                value={term}
                name="breed"
                onChange={(event) => onInputChange(event)}
                placeholder="Search breed"
            />
            
            </div>
        </form>
    </div>
  );
};

export default SearchBar;
