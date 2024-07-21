import React from 'react';
import Login from '../../components/auth/Login';
import { login } from '../../services/authService';

const LoginPage = () => {
  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      console.log('Login response:', response);
      // Handle response (e.g., save token, redirect)
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;
