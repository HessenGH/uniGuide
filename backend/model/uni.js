const mongoose = require('mongoose');

const majorSchema = new mongoose.Schema({
  name: String,
});

const locationFacultySchema = new mongoose.Schema({
  location: String,
  faculties: [
    {
      name: String,
      majors: [majorSchema], // Majors within each faculty
    },
  ],
});

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String, 
  locationFaculties: [locationFacultySchema], // Different faculties for different locations
  establishedYear: Number,
  webiste:String,
});

module.exports = mongoose.model('University', universitySchema);
