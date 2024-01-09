import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { GetProduct } from '../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
function Product(){

  let { products } = useSelector((store) => store.products);

  let dispatch = useDispatch();
  useEffect(() => {
    if (products.length == 0) {
      dispatch(GetProduct());
      console.log("called");
    }
  }, []);

    return(
        <>
        <section className="shop-banner p-5">
  <div className="container-xxl">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 col-lg-6 text-center">
        <div className="shop-details">
          <h1 className="text-white protext"><b className="text-warning">#100%</b> Off On All Products</h1>
          <p className="text-white fs-5">Make your orders we will deliver..</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 p-3">
      {products.map((product) => (
        <div className="col mb-5" key={product.id}>
          <div className="card h-100 m-auto">
            <img src={product.image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <p className="card-text mb-2 text-warning">{product.brand}</p>
              <h5 className='mb-3'>{product.name} </h5>
              <p className="card-text mb-2 text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /></p>
              <h5 className='mb-3 text-success'>${product.price} <span className='text-warning pricetext'><del>{product.rate}</del></span></h5>
              <div className="card-footer m-auto text-center">
                <Link to={`/products/${product.id}`}><button className='btn btn-outline-danger'>View product</button></Link>
                <p className="price"><span className="red"></span> </p>
                <div className="d-flex justify-content-between align-items-center">
                </div>
              </div>
              <div className="card-footer d-md-none">
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <section className="pagination p-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 align-items-center justify-content-center">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link text-warning" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item "><a className="page-link text-warning" href="#">1</a></li>
              <li className="page-item"><a className="page-link text-warning" href="#">2</a></li>
              <li className="page-item"><a className="page-link text-warning" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link text-warning" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default Product