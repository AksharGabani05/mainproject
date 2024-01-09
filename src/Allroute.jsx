import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import CartBtn from './Components/Button/CartBtn';
import SingleProducts from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Blog from './Pages/Blog';

function Allroute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/products/:id' element={<SingleProducts/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
    </Routes>

  );
}

export default Allroute  
