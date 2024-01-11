/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewArrivel = () => {
  const [products1, setProducts1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'http://localhost:3000/products' with the actual URL of your JSON server endpoint
        const response = await axios.get('https://onlinedata1.onrender.com/products1');
        setProducts1(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
      {products1.slice(1, 5).map((product) => (
        <div className="col mb-5" key={product.id}>
          <div className="card h-100 m-auto">
            <img src={product.image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <p className="card-text mb-2">{product.brand}</p>
              <h5 className='mb-3'>{product.name} </h5>
              <div className="card-footer m-auto text-center">
                <p className='text-danger fs-4'>{product.status}</p>
                <p className="price"><span className="red"></span> <strike>${product.rate} </strike></p>
                <div className="d-flex justify-content-between align-items-center">
                  {/* <Link to='shop' className='m-auto btn btn-danger'>View products</Link> */}
                </div>
              </div>
              <div className="card-footer d-md-none">
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewArrivel;
