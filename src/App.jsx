import React, { useContext, useState } from 'react';
import Player from './Componets/Player';
import Display from './Componets/Display';
import Sidebar from './Componets/Sidebar';
import Navbar from './Componets/Navbar';
import { PlayerContext } from './Content/PlayerContext';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: fixed in large screens and toggleable in mobile */}
        <div className={`fixed lg:static bg-black z-40 ${isSidebarOpen ? 'block' : 'hidden lg:block'} lg:w-64`}>
          <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
        </div>

        {/* Display Area */}
        <div className="flex-1 lg:ml-24  overflow-y-auto"> {/* Shift content on large screens */}
          <Display />
        </div>
      </div>

      {/* Player */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Player />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  );
};

export default App;









  

 