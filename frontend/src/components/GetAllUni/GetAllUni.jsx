import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './getuni.css';

const GetAllUni = () => {
  const [uni, setUni] = useState([]);
  const [uniNames, setUniNames] = useState([]);
  const [selectedUniName, setSelectedUniName] = useState(''); // State for selected university name

  const getNames = async () => {
    try {
      const names = await axios.get("http://localhost:8000/api/universities/names");
      if (names) {
        setUniNames(names.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUni = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/universities");
      if (data) {
        setUni(data);
      } else {
        console.log("nuub");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUni();
    getNames();
  }, []);

  // Filter universities based on the selected university name
  const filteredUni = selectedUniName === '' ? uni : uni.filter(university => university.name === selectedUniName);

  return (
    <div>
      <select onChange={e => setSelectedUniName(e.target.value)}>
        <option value="">Select a university</option>
        {uniNames.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <div className="university-list">
        {filteredUni.map(university => (
          <Link to={`/${university._id}`} key={university._id}>
            <div className="university-card">
              <div className='image'>
                <img src={`./${university.image}`} alt={university.name} className="university-image" />
              </div>
              <h2 className="university-name">{university.name}</h2>
              <p className="established-year">Established Year: {university.establishedYear}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GetAllUni;
