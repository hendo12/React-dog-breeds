import React from 'react';
import DogItem from './DogItem';
import './DogList.css';

const DogList = ({ breeds, getDogPicture }) => {
  const renderedList = breeds.map(breed => {
    //   console.log('dog list breed: ', breed);
    //   let imageUrl;
    //   getDogPicture(breed).then((url)=> {
    //     imageUrl = url;
    //   });
    //   console.log('image url: ', imageUrl);
    return (
      <DogItem
        key={breed}
        breed={breed}
        getDogPicture={getDogPicture}
      />
    );
  });

//   console.log('dog list breeds', breeds);

  return <div className="dogList">{renderedList}</div>;
};

export default DogList;