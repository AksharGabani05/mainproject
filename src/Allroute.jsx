import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Service from './Pages/Service';
import Product from './Pages/Product';
import Contact from './Pages/Contact';

function Allroute() {
  return (
    <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Service/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>

  );
}

export default Allroute  