// src/pages/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Application!</h1>
          <p className="text-2xl mb-8">
            This is a simple home page designed with Tailwind CSS.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
