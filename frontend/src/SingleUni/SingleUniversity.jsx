import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './singleuni.css';

const SingleUniversity = () => {
  const [university, setUniversity] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchUniversity();
  }, []);

  const fetchUniversity = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/universities/${params.id}`);
      setUniversity(response.data);
    } catch (error) {
      console.error('Error fetching university:', error);
    }
  };

  const [visibleMajors, setVisibleMajors] = useState({}); // State to track visible majors

  const toggleMajorsVisibility = (facultyName) => {
    setVisibleMajors((prevVisibleMajors) => ({
      ...prevVisibleMajors,
      [facultyName]: !prevVisibleMajors[facultyName],
    }));
  };

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div className="university-card-single">
      <div>
        <img src={`./${university.image}`} alt={university.name} className="university-image-single" />
        <h2 className="university-name-s">{university.name}</h2>
        <p className="established-year-s">Established Year: {university.establishedYear}</p>
        <h3 className="faculty-location-s">Faculties by Location:</h3>
        {university.locationFaculties.map((locationFaculty) => (
          <div key={locationFaculty.location}>
            <p className="location">Location: {locationFaculty.location}</p>
            <ul className="faculty-list-s">
              {locationFaculty.faculties.map((faculty) => (
                <li key={faculty.name} className="faculty-item-s">
                  <h4
                    className="faculty-name-s"
                    onClick={() => toggleMajorsVisibility(faculty.name)}
                  >
                    {faculty.name}
                  </h4>
                  <ul className={`major-list-s ${visibleMajors[faculty.name] ? '' : 'major-list-s-none'}`}>
                
                    {console.log(visibleMajors[faculty.name])}
                    {faculty.majors.map((major) => (
                      <li key={major.name} className="major-item-s">
                        {major.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <a href={university.website} target="_blank" rel="noopener noreferrer">
          Visit the Official website
        </a>
      </div>
    </div>
  );
};

export default SingleUniversity;
