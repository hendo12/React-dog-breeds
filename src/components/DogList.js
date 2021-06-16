import React from 'react';
import DogItem from './DogItem';
import './DogList.css';

const DogList = ({ breeds, getDogPicture }) => {
  const renderedList = breeds.map(breed => {

    return (
      <DogItem
        key={breed}
        breed={breed}
        getDogPicture={getDogPicture}
      />
    );
  });

  return <div className="dogList">{renderedList}</div>;
};

export default DogList;