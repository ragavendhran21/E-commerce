import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginForm.scss';
import axios from "axios";

import Footer from './Footer';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'ragulragavendhran@gmail.com' && password === 'Raga@123') {
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-wrapper">
      <nav className='Loginnav'>
      MARKDOWNS: UP TO 70% OFF SHOP NOW
      </nav>
      <div className="login-content">
        <div className="login-image">
          <img src="/images/pana@2x.png" alt="Login Illustration" />
        </div>

        <div className="login-container">
          <div className="login-box">
            <h2>LOG IN</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="youremail@address.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter the password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="actions">
                <a href="#">Forget password</a>
              </div>
              <button type="submit" >Continue</button>
              <p>
                New to NeoSTORE? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginForm;