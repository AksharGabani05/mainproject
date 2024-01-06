import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
console.log(id);
  useEffect(() => {
    
    fetch(`http://localhost:8090/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [id]);

  const handleCart = () => {
    const itemInCart = cart.find((item) => item.id === products.id);

    if (itemInCart) {
      
      const updatedCart = cart.map((item) =>
        item.id === products.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      
      setCart([...cart, { ...products, quantity }]);
    }
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div>

      <div className="row">
      <div className="col-lg-6">
          <div className="card p-5 m-auto">
            <img src={products.image} alt="" className="card-img-top img-fluid p-2" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card p-3 m-auto">
            <div className="card-body">
              <h5 className="card-title">{products.brand}</h5>
              <h3 className="card-text">{products.name}</h3>
              <p className="card-text">
                <span className="text-danger fs-4 me-2">{products.price}$</span>
                <strike>{products.price * 2}$</strike>
              </p>
              <p className="card-text">{products.description}</p>
              <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>


              <div className="d-flex align-items-center mt-3">
        <button className="btn btn-outline-success me-2" onClick={decreaseQuantity}>
          -
        </button>
        <span className="mx-5">{quantity}</span>
        <button className="btn btn-outline-success " onClick={increaseQuantity}>
          +
        </button>
      </div>

             <div className="d-flex justify-content-center">
             
              </div>
            </div>
          </div>
          <div className="card">
            <div className="d-flex justify-content-center flex-column align-items-center">
            <h2 className="text-center mb-2">More products of the same</h2>
            <p className="mb-2">We have more products, visit the shop to get amazing deals from us!!</p>
            </div>
            
          </div>
        </div>
      </div>

      
  
    </div>
  );
};

export default SinglePage;
