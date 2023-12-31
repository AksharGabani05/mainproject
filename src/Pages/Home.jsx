import { Link } from "react-router-dom"
import Hero from "../Components/Hero"
// import banner from '../img/banner.png';
import FeaturProducts from "../Components/FeaturProducts";



const Home = () => {
  return <>
  <section className="banner bg-dark">
    <div className="container-xxl">
      <div className="row" >
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <p className='mb-3 text-white'>Trade in offer</p>
                  <h1 className="text-warning">Super Value Deals</h1>
                  <h2 className="text-white">On all products</h2>

                  <p className='mb-3 text-white'>Save more today with Apneck</p>

                  <button type="button" className="btn btn-success ms-2 m-1">
                <span className="fa fa-shopping-cart"></span> Shop Now
            </button>

                  </div>
                  
              </div>
            </div>
          </div>
          </div>
          {/* <img src={banner} alt="" />        */}
      </div>
    </div>
  </section>

  <section className="featured-products p-4 bg-dark">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-warning">Featured Products</h1>
          <p className="text-white">All Weather New Modern Designs</p>
        </div>
    <FeaturProducts/>
      </div>
    </div>
  </section>


  <section className="repair-services p-5 bg-dark">
    <div className="container-xxl">
      <div className="row ">
        <div className="repair-details text-center align-items-center">
          <h5 className='mb-3 text-white'>Repair Services</h5>
          <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  </section>
    <Hero/>
  </>
}

export default Home