/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SililarProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8090/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
      {products.slice(1,9).map((product) => (
        <div className="col mb-5" key={product.id}>
          <div className="card h-100 m-auto">
            <img src={product.image} className="card-img-top img-fluid" alt="..." />
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default SililarProducts;
