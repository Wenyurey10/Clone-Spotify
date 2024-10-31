import React from 'react'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      
      {}
      <div className='mb-8 px-4 sm:px-6 lg:px-8 '>
        <h1 className='my-5 font-bold text-xl sm:text-2xl lg:text-3xl'>Featured Charts</h1>
        <div className='flex space-x-4  scrollbar-hide'>
          {albumsData.map((item) => (
            <AlbumItem 
              key={item.id} 
              name={item.name} 
              desc={item.desc} 
              id={item.id} 
              image={item.image}
            />
          ))}
        </div>
      </div>
      
      {}
      <div className='mb-8 px-4 sm:px-6 lg:px-8'>
        <h1 className='my-5 font-bold text-xl sm:text-2xl lg:text-3xl'>Today's Biggest Hits</h1>
        <div className='flex space-x-4 overflow-x-auto scrollbar-hide'>
          {songsData.map((item) => (
            <SongItem 
              key={item.id} 
              name={item.name} 
              desc={item.desc} 
              id={item.id} 
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
