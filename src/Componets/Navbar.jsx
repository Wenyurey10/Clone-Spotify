import React, { useState } from 'react';
import { assets } from '../assets/assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3 md:px-6 lg:px-8">
      {}
      <div className="flex justify-between items-center">
        {}
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-4 bg-black p-2 pl-10 rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-200"
          >
            <img src={assets.arrow_left} alt="Back" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="w-8 h-4 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-200"
          >
            <img src={assets.arrow_right} alt="Forward" />
          </button>
        </div>

        {/* Botones de acción y menú */}
        <div className="flex items-center gap-4">
          {/* Botón "Explore Premium" oculto en pantallas pequeñas */}
          <button
            onClick={() => navigate('/premium')}
            className="hidden md:inline-block bg-white text-black text-sm px-4 py-1 rounded-2xl cursor-pointer hover:bg-gray-200 transition duration-200"
          >
            Explore Premium
          </button>

          {/* Botón "Install App" */}
          <button
            onClick={() => navigate('/install')}
            className="bg-black text-sm px-3 py-1 rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-200"
          >
            Install App
          </button>

          {/* Icono de usuario */}
          <div className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
            W
          </div>

          {/* Botón de menú en pantallas pequeñas para abrir el Sidebar */}
          <button
            className="md:hidden ml-2 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {/* Icono de menú hamburguesa */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {}
      <div
        className={`mt-4 md:flex md:justify-start md:items-center md:gap-4 ${
          isMenuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <button
          onClick={() => navigate('/all')}
          className="w-full md:w-auto bg-white text-white px-4 py-2 rounded-2xl mb-2 md:mb-0 cursor-pointer hover:bg-gray-200 transition duration-200"
        >
          ALL
        </button>
        <button
          onClick={() => navigate('/music')}
          className="w-full md:w-auto text-white bg-black text-sm px-4 py-2 rounded-2xl mb-2 md:mb-0 cursor-pointer hover:bg-gray-700 transition duration-200"
        >
          Music
        </button>
        <button
          onClick={() => navigate('/podcasts')}
          className="w-full md:w-auto text-white bg-black text-sm px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-200"
        >
          Podcasts
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

