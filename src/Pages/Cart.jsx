import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartproductss, setCartproductss] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const fetchCartproductss = async () => {
      try {
        const response = await axios.get('http://localhost:8090/cart');
        setCartproductss(response.data.map(products => ({ ...products, quantity: 1 })));
      } catch (error) {
        console.error('Error fetching cart productss:', error);
      }
    };

    fetchCartproductss();
  }, []);

  const handleRemoveproducts = async (id) => {
    try {
     
      await axios.delete(`http://localhost:8090/cart/${id}`);
      setCartproductss(cartproductss.filter((products) => products.id !== id));
      console.log(`products with ID ${id} removed from the cart.`);
    } catch (error) {
      console.error('Error removing products from the cart:', error);
    }
  };

  const handleIncrementQuantity = (id) => {
    setCartproductss((prevCartproductss) =>
      prevCartproductss.map((products) =>
        products.id === id ? { ...products, quantity: products.quantity + 1 } : products
      )
    );
  };

  const handleDecrementQuantity = (id) => {
    setCartproductss((prevCartproductss) =>
      prevCartproductss.map((products) =>
        products.id === id && products.quantity > 1 ? { ...products, quantity: products.quantity - 1 } : products
      )
    );
  };

  const handleApplyCoupon = () => {
   
    if (couponCode === 'AKSHAR20') {
      setDiscount(0.2); 
    }
  };

  const calculateTotalPrice = () => {
    const subtotal = cartproductss.reduce((sum, products) => sum + products.price * products.quantity, 0);
    const discountedTotal = subtotal * (1 - discount);
    return discountedTotal.toFixed(2); 
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartproductss.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="row">
            {cartproductss.map((products) => (
              <div className="col-md-4 mb-4" key={products.id}>
                <div className="card">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <img src={products.image} alt={products.name} className="card-img img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">{products.name}</h5>
                        <p className="card-text">{products.brand}</p>
                        <p className="card-text">${products.price}</p>
                        <div className="btn-group">
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleIncrementQuantity(products.id)}
                          >
                            +
                          </button>
                          <span className="btn btn-light">{products.quantity}</span>
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleDecrementQuantity(products.id)}
                          >
                            -
                          </button>
                        </div>
                        <button
                          className="btn btn-danger mt-2"
                          onClick={() => handleRemoveproducts(products.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={handleApplyCoupon}>
                  Apply Coupon
                </button>
              </div>
            </div>
            <p>Total Product Price: ${calculateTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
