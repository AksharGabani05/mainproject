/* eslint-disable no-unused-vars */
import React from 'react'

import { Link } from 'react-router-dom';
import { BsSlack, BsGithub } from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import playstore from '../../img/pay/play.jpg'
import appstore from '../..//img/pay/app.jpg'
import visa from '../../img/pay/pay.png'

const Footer = () => {
  return <>
  <footer className='footer p-5 bg-white'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3 text-dark'><b>Contact</b></h2>
          <div className='mb-3 text-dark'><p><b>Address:</b>   408,AK House , Katargam ,Surat , 395005</p> </div>
          <div className='mb-3 text-dark'><p><b>Phone:</b>  <a className='footer-tel  text-decoration-none' href="tel:+91 9265947002">Call us at +91 9265947002</a></p> </div>
          <div className='mb-4 text-dark'><p><b>Hours:</b>  From 8 a.m To 6 p.m</p> </div>
          <div className='mb-3 text-dark'><p><b>Follow the developer</b></p> </div>
          <div className="socials d-flex gap-3 fs-2">
          <Link to='https://github.com/AksharGabani05' id='footer-link' target='_blank' className='gap-3'>
          <BsGithub />
          </Link>
          <Link to='https://www.instagram.com/akshargabani9/' id='footer-link' target='_blank' className='gap-3'>
          <FaInstagram />
          </Link>
          <Link to={'https://www.linkedin.com/in/akshar-gabani-149477253/'} className='gap-3' id='footer-link'>
          <FaLinkedin />
          </Link>
          <Link to='https://gabaniakshar.pages.dev/' id='footer-link' target='_blank' className='gap-3'>
          <FaUser />

          </Link>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3 text-dark'><b>About</b></h2>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' to='/about' id='footer-links'>About Us</Link>  </div>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' to='checkout' id='footer-links'>Delivery</Link>  </div>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' id='footer-links'>Privacy Policy</Link>  </div>
          <div className='mb-3 text-darl '> <Link className=' text-decoration-none' id='footer-links'>Terms & Conditions</Link>  </div>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' id='footer-links'>Fee Policy</Link>  </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3 text-dark'><b>Account</b></h2>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' to='/login' id='footer-links'>Profile</Link>  </div>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' to='/cart' id='footer-links'>View Cart</Link>  </div>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' to='/contact' id='footer-links'>Help</Link>  </div>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' id='footer-links'>Payments</Link>  </div>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' id='footer-links'>My Wishlist</Link>  </div>
          <div className='mb-3 text-dark '> <Link className=' text-decoration-none' id='footer-links'>Coupons</Link> </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <h2 className='footer-title mb-3 text-dark'><b>Install App</b></h2>
          <p className='mb-3 text-dark'>Available On Google Play Services & App Store</p>
          <div className="className='mb-3 col-md-6 col-12 pay">
          <div className='mb-3'>
          <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
          <img src={playstore} alt="" />
          </Link>
          </div>
          <div className='mb-3'>
          <Link to='https://www.apple.com/app-store/' target='_blank'>
          <img src={appstore} alt="" />
          </Link>
          </div>
          </div>
          <p className="mb-3 text-dark">
            Payment Methods
          </p>
          <div className="pay">
          <Link to='https://www.paypal.com/signin' target='_blank'>
          <img src={visa} alt="" />
          </Link>
          </div>
        </div>
      </div>
      <hr className='my-4' />
      <div className="row">
        <div className="col-12 col-md-6">
        <p className="text-center text-md-start text-dark">&copy;Developed by Akshar Gabani 2023</p>
        </div>
        <div className="col-12 col-md-6">
        <ul className="list-inline text-center text-md-end">
          <li className="list-inline-item"><Link to="#" className="text-dark text-dark  text-decoration-none">Privacy Policy</Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark text-dark  text-decoration-none">Terms of Use</Link></li>
          <li className="list-inline-item"><Link to="#" className="text-dark text-dark  text-decoration-none">Contact Us</Link></li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
  </>;
}

export default Footer