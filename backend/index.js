const express = require('express');
const mongoose = require('mongoose');
const University = require('./model/uni'); 


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
const PORT = 6000;

// Connect to the MongoDB database


// Middleware to parse JSON requests
app.use(express.json());

  

app.get("/", (req, res) => {
    res.send("<h1>Welcome to uni app</h1>");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

