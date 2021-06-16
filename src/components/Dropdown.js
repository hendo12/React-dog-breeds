import React, { useState } from 'react';

const Dropdown = ({ breeds, term, setTerm }) => {
  const onSelectChange = (event) => {
    event.preventDefault();
    console.log('dropdown option chosen: ', event.target.value);
    setTerm(event.target.value);
    // onFormSubmit(term);
  };

  const renderedBreeds = breeds.map((breed) => {
        return <option value={breed} key={breed}>{breed}</option>
  });
  

  return (
    <div className="search-bar ui segment">
        <form className="breedsForm">
            <div className="field">
            <label htmlFor="breeds">Choose a breed: </label>
            <select name="breeds" id="breeds" onChange={onSelectChange} value={term}>
                <option value="select" disabled="disabeld">Select</option>
                {renderedBreeds}
            </select>
            </div>
        </form>
    </div>
  );
};

export default Dropdown;
