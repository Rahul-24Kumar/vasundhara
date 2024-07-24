import React from 'react';

const Home = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/environment.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: Dark overlay for better text contrast */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Vasundhara</h1>
        <p className="text-lg md:text-2xl mt-4">Let's work together to save our environment</p>
      </div>
    </div>
  );
};

export default Home;
