import React from 'react';
import './Images.css';
import Icon1 from './img/ali.jpeg';
import Icon2 from './img/mehio.jpeg';
import Icon3 from './img/cesar.jpeg';
import Icon4 from './img/Mhmd.jpg';
import Icon5 from './img/jana.jpeg';
import Icon6 from './img/hessen.jpeg';

const Image = ({ image, name }) => {
  return (
    <div className="image-container">
      <img src={image} alt={name} className='imag'/>
      {/* style={{ width: '150px', height: '100px',borderRadius:'50%'}}  */}
      <p>{name}</p>
    </div>
  );
};

function Images() {
  const images = [
    { image: Icon1, name: 'Ali Hammoud' },
    { image: Icon2, name: 'Mohiden' },
    { image: Icon3, name: 'Cesar' },
    { image: Icon4, name: 'Mohamad Abbas' },
    { image: Icon5, name: 'Jana Nasser' },
    { image: Icon6, name: 'Hessen Ghadban' },
  ];

  return (
    <div className="App">
       <h2>OurTeam</h2>
      <div className="image-grid">
       
        {images.map((image, index) => (
          <div >
            <Image key={index} image={image.image} name={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
