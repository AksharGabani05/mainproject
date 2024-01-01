import { Link } from "react-router-dom"
import Hero from "../Components/Hero"
import banner from '../img/back.jpg';
import FeaturProducts from "../Components/FeaturProducts";
import { Button } from "react-bootstrap";
import NewArrivel from "../Components/NewArrivel";

import banner1 from '../img/b17.jpg'
import banner2 from '../img/b10.jpg'



const Home = () => {
  return <>
  <section className="banner bg-white">
    <div className="container-xxl">
      <div className="row" >
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  <p className='mb-3 text-dark'>Trade in offer</p>
                  <h1 className="text-warning">Super Value Deals</h1>
                  <h2 className="text-dark">On all products</h2>

                  <p className='mb-3 text-dark'>Save more today with Apneck</p>

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

  <section className="featured-products p-4 bg-white">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-warning">Featured Products</h1>
          <p className="text-dark">All Weather New Modern Designs</p>
        </div>
    <FeaturProducts/>
      </div>
    </div>
  </section>


  <section className="repair-services p-5 bg-white">
    <div className="container-xxl">
      <div className="row ">
        <div className="repair-details text-center align-items-center">
          <h5 className='mb-3 text-white b2text'>Repair Services</h5>
          <h2 className='mb-3 text-white b2text1'>On 70% Off on All Products And Accessories</h2>
          <Button className="btn btn-danger">explore now</Button>
        </div>
      </div>
    </div>
  </section>

  <section className="new-arrivals p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-warning">New Arrivals</h1>
          <p className="text-dark">Your Best Designer Outfits</p>
        </div>
        <NewArrivel />
      </div>
    </div>
  </section>
    <Hero/>

    <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hot Deals</h5>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits</small></p>
                  <Link to='blog'>
                  <Button className="btn btn-danger">Learn more</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner2} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Season-In</h5>
                  <h2 className="card-text mb-2">All Weather Attire</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                  <Link to='blog'>
                  <Button className="btn btn-danger">Learn more</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  </>
}

export default Home