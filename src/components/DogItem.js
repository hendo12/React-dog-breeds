import React, { useState, useEffect } from 'react';

const DogItem = ({ breed, getDogPicture }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        getDogPicture(breed).then((url)=> {
            setImageUrl(url);
          });
        return () => {
           
        }
    }, [])

    console.log('dog item image url: ', imageUrl);

  return (
    <div className="breed-item">
      <img
        alt={breed}
        className="image"
        src={imageUrl}
      />
      <div className="content">
        <div className="header">{breed}</div>
      </div>
    </div>
  );
};

export default DogItem;
