import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit, breeds, setDisplayBreeds }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
        <form onSubmit={onFormSubmit} className="breedsForm">
            <div className="field">
            <label htmlFor="breed">Dog Breeds</label>
            <input
                type="text"
                value={term}
                name="breed"
                onChange={(event) => setTerm(event.target.value)}
            />
            
            </div>
        </form>
    </div>
  );
};

export default SearchBar;
