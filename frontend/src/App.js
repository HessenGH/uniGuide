import './App.css';
import GetAllUni from './GetAllUni/GetAllUni';
import SingleUniversity from './SingleUni/SingleUniversity';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" exact element={ <GetAllUni/>}/>
<Route path="/:id" element={ <SingleUniversity/>}/>

</Routes>
    </div>
  );
}

export default App;
