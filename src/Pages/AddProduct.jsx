import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'; // Import Axios
import { addProduct } from '../Redux/Action';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [product1, setProduct1] = useState({
    name: '',
    price: '',
    img: '',
    brand: '',
    status: '',
    rate: ''
  });

  const handleInputChange = (e) => {
    setProduct1({
      ...product1,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to json-server
      const response = await axios.post('http://localhost:8090/products1', product1);

      // Dispatch your addProduct action with the response data
      dispatch(addProduct(response.data));

      // Optionally, you can reset the form or handle success in other ways
      setProduct1({
        name: '',
        price: '',
        img: '',
        brand: '',
        status: '',
        rate: ''
      });

      // Close the modal if needed
      // $('#loginModal').modal('hide'); // You can use jQuery or other methods to close the modal
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error as needed
    }
  };

  return (
    <>
      <button type="button" className="btn btn-danger ms-2 m-1" data-bs-toggle="modal" data-bs-target="#loginModal">
        <span className="fa fa-sign-in me-1"></span> ADD Products
      </button>

      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">ADD PRODUCTS</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div>
                  <label className='mb-3'>
                    Product Name:
                    <input
                      type="text"
                      name="name"
                      value={product1.name}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <label className='mb-3'>
                  Product img:
                  <input
                    type='url'
                    name="img"
                    value={product1.img}
                    onChange={handleInputChange}
                  />
                </label>
                <label className='mb-3'>
                  Product Price:
                  <input
                    type="number"
                    name="price"
                    value={product1.price}
                    onChange={handleInputChange}
                  />
                </label>
                <label className='mb-3'>
                  Product brand:
                  <input
                    type="text"
                    name="brand"
                    value={product1.brand}
                    onChange={handleInputChange}
                  />
                </label>
                <label className='mb-3'>
                  Product status:
                  <input
                    type="text"
                    name="status"
                    value={product1.status}
                    onChange={handleInputChange}
                  />
                </label>
                <label className='mb-3'>
                  Product rate:
                  <input
                    type="text"
                    name="rate"
                    value={product1.rate}
                    onChange={handleInputChange}
                  />
                </label><br /><br />
                <button type="submit" className='btn btn-danger'>Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
