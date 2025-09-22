"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signin.css';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Admin login successful', data);

        toast.success('Admin Login Successful', {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.href = 'https://univibes-admin-dashboard.netlify.app/';
      } else {
        console.error('Admin login failed', response.statusText);
        toast.error('Admin Login Failed', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error('An error occurred during registration');
      console.error('An error occurred during registration', error);
    }
  };

  return (
    <div className='formpage'>
      <h1>Login</h1>

      <div style={{ marginBottom: '80px' }}></div>

      <div className='form-container'>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '20px' }}></div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='redirect-text'>
            New user? <a href='/pages/auth/signup'>Sign up here</a> and start your journey with us!
          </p>
        </div>
        <div className='button-container'>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SigninPage;
