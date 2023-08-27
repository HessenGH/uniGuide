import './App.css';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import Navbar from './components/Navbar/Navbar';
import Image from './components/Images/Images';
import About from './components/About/About';
import GetAllUni from './components/GetAllUni/GetAllUni';
import SingleUniversity from './components/SingleUni/SingleUniversity';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
<Route path='/' exact element={<Home/>}/>
     <Route path="/universities" element={ <GetAllUni/>}/>
<Route path="/:id" element={ <SingleUniversity/>}/>
<Route path="/about" element={ <About/>}/>
<Route path="/images" element={ <Image/>}/>

</Routes>
<Footer/>

    </div>
  );
}

export default App;
