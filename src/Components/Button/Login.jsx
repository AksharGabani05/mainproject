import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Action'; // Assuming login is correctly implemented in your Redux actions
import { Modal, Button } from 'react-bootstrap';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShowAlert(false);
  const handleShow = () => setShowAlert(true);

  <Modal show={showAlert} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          User successfully logged in!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:8090/user", {
        email: email,
        password: password
      });

      console.log(response.data);

      
      dispatch(login(response.data));
      setShowAlert(true);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <>
      
      <button type="button" className="btn btn-danger ms-2 m-1" data-bs-toggle="modal" data-bs-target="#loginModal">
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

     
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-danger w-100 mb-4">
                <span className=" me-2"></span> Sign in With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className=" me-2"></span> Sign in With Facebook
              </button>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success w-100 mt-5">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
      
    </>
  );
}

export default Login;
