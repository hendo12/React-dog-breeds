import React, { useState, useEffect } from 'react';
import './DogItem.css';

const DogItem = ({ breed, getDogPicture }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if(imageUrl === '') {
            getDogPicture(breed).then((url)=> {
                setImageUrl(url);
            });
        }
    }, [])

  return (
    <div className="breed-item">
      <div className="breed-overlay"></div>
      <img
        alt={breed}
        className="breed-image"
        src={imageUrl}
      />
      <div className="breed-header">{breed}</div>
    </div>
  );
};

export default DogItem;
