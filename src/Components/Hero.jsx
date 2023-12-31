import React from 'react'
import orders from '../img/icons/icon1.png'
import orders1 from '../img/icons/icon2.png'
import orders2 from '../img/icons/icon3.png'
import orders3 from '../img/icons/icon4.png'
import orders4 from '../img/icons/icon5.png'

const Hero = () => {
  return <>
    <section className="hero p-4 bg-dark">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
        <div className="row g-4 justify-content-center justify-content-md-between align-items-center">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card text-center m-auto bg-dark">
              <img src={orders} className="card-img-top img-fluid m-auto" alt="Fast Orders" />
              <div className="card-body">
                <p className="card-text mb-0 text-white">Fast Orders</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="card text-center m-auto bg-dark">
              <img src={orders1} className="card-img-top img-fluid m-auto" alt="Quick Shipping" />
              <div className="card-body">
                <p className="card-text mb-0 text-white">Quick Shipping</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="card text-center m-auto bg-dark">
              <img src={orders2} className="card-img-top img-fluid m-auto" alt="High Saves" />
              <div className="card-body">
                <p className="card-text mb-0 text-white">High Saves</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="card text-center m-auto bg-dark">
              <img src={orders3} className="card-img-top img-fluid m-auto" alt="24/7 Support" />
              <div className="card-body">
                <p className="card-text mb-0 text-white">24/7 Support</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="card text-center m-auto bg-dark">
              <img src={orders4} className="card-img-top img-fluid m-auto" alt="Online Orders" />
              <div className="card-body ">
                <p className="card-text mb-0 text-white">Online Orders</p>
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

export default Hero