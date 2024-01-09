import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SililarProducts from "../Components/SimilarProducts";
import { addCart } from "../Redux/Action";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
    const [products, setProducts] = useState({});
    const { id } = useParams(); 
  
    
    useEffect(() => {
      const fetchData = async () => {
        axios.get(`http://localhost:8090/products/${id}`)
          .then(response => {
            setProducts(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };
    
      fetchData(); 
    }, [id]);

    const handleCart = async () => {
      try {
    
        await axios.post('http://localhost:8090/cart', products);
        
    alert("SuccessFull Added")
  
        console.log("Product added to cart:", products);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    };
  
  
   
  return (
    <div className="container p-5">
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

              <div className="d-flex justify-content-center">
                <button className='btn btn-dark' onClick={handleCart}>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h2 className="text-center mb-2">More products of the same</h2>
              <p className="mb-2">We have more products, visit the shop to get amazing deals from us!!</p>
            </div>
          </div>
          <SililarProducts/>
        </div>
      </div>
      
    </div>
  );
};

export default SingleProduct;
