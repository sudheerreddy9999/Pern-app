import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to My Fullstack App</h1>
      <p className="text-lg text-gray-600 mb-8">This is the home page. Please login or signup to continue.</p>
      <div className="space-x-4">
        <a
          href="/login"
          className="inline-block py-2 px-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </a>
        <a
          href="/signup"
          className="inline-block py-2 px-4 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Signup
        </a>
      </div>
    </div>
  );
};

export default HomePage;
