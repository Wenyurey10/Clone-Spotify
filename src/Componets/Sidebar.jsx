import React from 'react';
import { assets } from '../assets/assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay para dispositivos móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-52 bg-[#121212] text-white p-4 z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:flex lg:flex-col lg:w-1/4 overflow-y-auto`}
        style={{ height: 'calc(100vh - 64px)' }} // Ajusta el sidebar para que no sobrepase el player
      >
        {/* Contenido del Sidebar */}
        <div className="flex flex-col gap-4 mb-6">
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-3 pl-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <img className="w-6 h-6" src={assets.home_icon} alt="Home Icon" />
            <p className="font-bold">Home</p>
          </div>
          <div
            onClick={() => navigate('/search')}
            className="flex items-center gap-3 pl-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <img className="w-6 h-6" src={assets.search_icon} alt="Search Icon" />
            <p className="font-bold">Search</p>
          </div>
          
          {/* Secciones adicionales */}
          <div className="bg-[#242424] p-4 rounded font-semibold flex flex-col items-start gap-1 mb-4">
            <h1 className="text-sm">Create your first playlist</h1>
            <p className="font-light text-xs">It's easy, we will help you</p>
            <button className="px-4 py-1.5 bg-white text-black text-sm rounded-full mt-2 hover:bg-gray-200 transition duration-200">
              Create Playlist
            </button>
          </div>

          <div className="bg-[#242424] p-4 rounded font-semibold flex flex-col items-start gap-1">
            <h1 className="text-sm">Let's find some podcasts to follow</h1>
            <p className="font-light text-xs">We'll keep you updated on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-black text-sm rounded-full mt-2 hover:bg-gray-200 transition duration-200">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;



