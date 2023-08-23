const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
const multer=require('multer')
const University = require('./model/uni'); 


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public'); // Set the destination folder for uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
  },
});

const upload = multer({ storage: storage });

mongoose.connect('mongodb+srv://uni:uni123@cluster0.6yt8k29.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


const app = express();
const PORT = 8000;
app.use(cors())
// Connect to the MongoDB database


// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to create a new university
app.post('/api/universities', upload.single('image'),async (req, res) => {
  try {
    const newUniversityData = {
      ...req.body,
      image: req.file ? req.file.filename : null, // Store the filename in the image field if an image is uploaded
    };
    const newUniversity = await University.create(newUniversityData);
    res.status(201).json(newUniversity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API endpoint to get all universities
app.get('/api/universities', async (req, res) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// API endpoint to get only the names of all universities
app.get('/api/universities/names', async (req, res) => {
  try {
    const universities = await University.find({}, 'name'); // Retrieve only the 'name' field
    const universityNames = universities.map(university => university.name);
    res.json(universityNames);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// API endpoint to get a single university by ID
app.get('/api/universities/:id', async (req, res) => {
  try {
    const universityId = req.params.id;
    
    const university = await University.findById(universityId);
    
    if (!university) {
      return res.status(404).json({ message: 'University not found' });
    }
    
    res.json(university);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// API endpoint to get faculties by location
app.get('/api/faculties/:location', async (req, res) => {
    try {
      const location = req.params.location;
  
      const universities = await University.find({
        'locationFaculties.location': location
      });
    //   console.log(universities)
  
      const faculties = universities.reduce((acc, university) => {
        const locationFaculty = university.locationFaculties.find(lf => lf.location === location);
        if (locationFaculty) {
          acc.push(...locationFaculty.faculties);
        }
        return acc;
      }, []);
  
      res.json(faculties);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  

app.get("/", (req, res) => {
    res.send("<h1>Welcome to uni app</h1>");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

