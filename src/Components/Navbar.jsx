import React from 'react'
import { Link } from "react-router-dom";
import Login from './Button/Login';
import Signup from './Button/Signup'
import logoImage from '../img/logo.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/">akshar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav mx-auto ps-5  nav_ul align-items-center">
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact </Link>
                            </li>
                            </ul>
                        <div className='ms-auto'>
                            <Signup />
                        </div>
                    </div>
                    {/* end */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
