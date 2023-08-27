import React from 'react';
import './Images.css';
import Icon1 from './img/Icon1.png';
import Icon2 from './img/Icon2.png';
import Icon3 from './img/Icon3.png';
import Icon4 from './img/Icon4.png';
import Icon5 from './img/Icon5.png';
import Icon6 from './img/Icon6.png';

const Image = ({ image, name }) => {
  return (
    <div className="image-container">
      <img src={image} alt={name} style={{ maxWidth: '100%', height: 'auto'}} />
      <p>{name}</p>
    </div>
  );
};

function Images() {
  const images = [
    { image: Icon1, name: 'Image 1' },
    { image: Icon2, name: 'Image 2' },
    { image: Icon3, name: 'Image 3' },
    { image: Icon4, name: 'Image 4' },
    { image: Icon5, name: 'Image 5' },
    { image: Icon6, name: 'Image 6' },
  ];

  return (
    <div className="App">
      <div className="image-grid">
        {images.map((image, index) => (
          <Image key={index} image={image.image} name={image.name} />
        ))}
      </div>
    </div>
  );
}

export default Images;
