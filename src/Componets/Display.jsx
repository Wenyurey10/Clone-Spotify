import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets/assets'

const Display = () => {

    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes('album');
    const albumId = isAlbum ? location.pathname.split('/').pop() : '';
    const bgColor = isAlbum && albumsData[Number(albumId)] ? albumsData[Number(albumId)].bgColor : '#121212';
   
    useEffect(() => {
        if (isAlbum && displayRef.current) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
        } else if (displayRef.current) {
            displayRef.current.style.background = `#121212`
        }
    }, [isAlbum, bgColor]);
  
    return (
        <div
            ref={displayRef}
            className="
                  w-[full]
              m-2 px-6 pt-4 
                rounded-xl
                bg-[#121212] 
                text-white 
                overflow-auto 
                transition 
                duration-300 
                ease-in-out
            "
        >
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>
        </div>
    )
}

export default Display
