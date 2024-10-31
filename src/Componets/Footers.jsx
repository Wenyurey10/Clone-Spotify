import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Company */}
          <div className='flex flex-col'>
            <h3 className='font-bold mb-4 text-lg'>Company</h3>
            <a href="#" className="mb-2 hover:underline">About</a>
            <a href="#" className="mb-2 hover:underline">Employment</a>
            <a href="#" className="mb-2 hover:underline">For the Record</a>
          </div>
          
          {/* Columna 2: Communities */}
          <div className='flex flex-col'>
            <h3 className='font-bold mb-4 text-lg'>Communities</h3>
            <a href="#" className="mb-2 hover:underline">For Artists</a>
            <a href="#" className="mb-2 hover:underline">Developers</a>
            <a href="#" className="mb-2 hover:underline">Advertising</a>
            <a href="#" className="mb-2 hover:underline">Investors</a>
            <a href="#" className="mb-2 hover:underline">Suppliers</a>
          </div>
          
          {/* Columna 3: Useful Links */}
          <div className='flex flex-col'>
            <h3 className='font-bold mb-4 text-lg'>Useful Links</h3>
            <a href="#" className="mb-2 hover:underline">Attendance</a>
            <a href="#" className="mb-2 hover:underline">Free Mobile App</a>
          </div>
          
          {/* Columna 4: Spotify Plans */}
          <div className='flex flex-col'>
            <h3 className='font-bold mb-4 text-lg'>Spotify Plans</h3>
            <a href="#" className="mb-2 hover:underline">Premium Individual</a>
            <a href="#" className="mb-2 hover:underline">Premium Duo</a>
            <a href="#" className="mb-2 hover:underline">Premium Family</a>
            <a href="#" className="mb-2 hover:underline">Premium for Students</a>
            <a href="#" className="mb-2 hover:underline">Spotify Free</a>
          </div> 
        </div>
        
        {/* Línea divisoria */}
        <hr className="my-8 border-gray-700" />
        
        {/* Texto de Copyright */}
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Spotify AB. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
