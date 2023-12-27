import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Allroute from './Allroute';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Allroute/>
      </BrowserRouter>

    </>
  );
}

export default App;
