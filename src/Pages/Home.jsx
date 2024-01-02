import { Link } from "react-router-dom"
import Hero from "../Components/Hero"
import banner from '../img/back.jpg';
import FeaturProducts from "../Components/FeaturProducts";
import { Button } from "react-bootstrap";
import NewArrivel from "../Components/NewArrivel";

import banner1 from '../img/b17.jpg'
import banner2 from '../img/b10.jpg'


import blog1 from '../img/blog/blog-1.jpg'
import blog2 from '../img/blog/blog-2.jpg'
import blog3 from '../img/blog/blog-3.jpg'
import blog4 from '../img/blog/blog-4.jpg'



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

  <section className="blogs p-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="mb-3 text-warning">What our customers say...</h1>
        <p className="mb-4">Our customers never miss a bit on providing feedback</p>
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog1} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog2} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog3} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog4} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="news-letter p-5">
    <div className="container-xxl">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-center">
            <h2 className='mb-3'>Sign Up for a newsletter</h2>
            <h5>Get email updates on all our <Link className="text-decoration-none">special offers</Link></h5>
          </div>
        </div>
        <div className="col-md-6 details d-flex flex-column justify-content-center">
          <div className="input-group mb-3">
            <input type="text" id='news-input' className="form-control" placeholder="@example.com" aria-label="@example.com" aria-describedby="basic-addon2" />
            <button className="input-group-text" id="basic-addon2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
}

export default Home