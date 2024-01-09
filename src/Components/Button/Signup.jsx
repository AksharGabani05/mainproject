import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { regester } from '../../Redux/Action';
import { Modal, Button } from 'react-bootstrap';
import Login from './Login';
import CartBtn from './CartBtn';
import AddProduct from '../../Pages/AddProduct';


const Signup = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [isRegistered, setIsRegistered] = React.useState(false);

    const handleClose = () => setShowAlert(false);
    const handleShow = () => setShowAlert(true);

    const handalesignup = async (userdata) => {
        try {
            const user = await axios.post("http://localhost:8090/user", userdata);
            console.log(user.data);
            dispatch(regester(userdata));
            setIsLoggedIn(true);
            setIsRegistered(true);
            handleShow();
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const handalesubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username,
            email: email,
            password: password,
        };

        axios.get(`http://localhost:8090/user?email=${email}`)
            .then(response => {
                if (response.data.length > 0) {
                    alert('Email already exists. Please use a different email.');
                } else {
                    handalesignup(user);
                }
            })
            .catch(error => {
                console.error('Error checking email existence', error);
            });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        
    };


    return (
        <div>
            {isRegistered && (
                <>
                    <AddProduct />
                    <CartBtn />
                    
                </>
            )}
             <Login/>

            <button
                type="button"
                className={`btn ${isLoggedIn ? 'btn-danger' : 'btn-success'} ms-2`}
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                onClick={() => setIsLoggedIn(false)}
            >
                <span className={`fa ${isLoggedIn ? 'fa-sign-out' : 'fa-user-plus'} me-1`}></span>
                {isLoggedIn ? 'Logout' : 'Register'}
            </button>

            <Modal show={showAlert} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    User successfully registered!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger w-100 mb-4">
                                <span className=" me-2"></span> Sign up With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="bi bi-facebook me-2"></span> Sign up With Facebook
                            </button>
                            <form onSubmit={handalesubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-success w-100 mt-3">
                                {isLoggedIn ? 'Logout' : 'Register'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
