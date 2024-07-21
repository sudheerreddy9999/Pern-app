import React from 'react';
import Signup from '../../components/auth/Signup';
import { signup } from '../../services/authService';

const SignupPage = () => {
  const handleSignup = async (email, password) => {
    try {
      const response = await signup(email, password);
      console.log('Signup response:', response);
      // Handle response (e.g., save token, redirect)
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return <Signup onSignup={handleSignup} />;
};

export default SignupPage;
