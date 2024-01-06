import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Service from './Pages/Service';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Signup from './Components/Button/Signup';
import AddProduct from './Pages/AddProduct';
import SingleProduct from './Pages/SingleProduct';

function Allroute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Service/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>

  );
}

export default Allroute  
