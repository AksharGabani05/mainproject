import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Allroute from './Allroute';
import Footer from './Components/Button/Footer';
import Home from './Pages/Home';


function App() {
  return (
    <>
        <Navbar/>
        <Allroute/>
        <Home/>
        <Footer/>
        

    </>
  );
}

export default App;
