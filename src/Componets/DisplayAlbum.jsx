import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets/assets';
import { PlayerContext } from '../Content/PlayerContext';

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext)

    if (!albumData) {
        return <div className="text-center mt-10 text-white">Album no encontrado</div>
    }

    return (
        <>
            <div className="mt-10 flex flex-col md:flex-row md:items-end gap-6 px-4 sm:px-6 lg:px-8">
                <img className="w-48 h-48 rounded-md object-cover mx-auto md:mx-0" src={albumData.image} alt={albumData.name} />
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-400">Playlist</p>
                    <h2 className="text-3xl font-bold mb-2 md:text-5xl">{albumData.name}</h2>
                    <h4 className="text-gray-300 mb-4">{albumData.desc}</h4>
                    <p className="mt-1 text-sm md:text-base">
                        <img className="inline-block w-5 mr-1" src={assets.spotify_logo} alt="Spotify" />
                        <b className="font-semibold">Spotify</b>
                        . 1,323,154 likes 
                        . <b className="font-semibold">50 songs</b>
                        , about 2 hr 30 min
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 px-4 sm:px-6 lg:px-8 text-gray-400">
                <p className="flex items-center">
                    <b className="mr-4">#</b>Title
                </p>
                <p className="hidden sm:block">Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img className="m-auto w-4 hidden sm:block" src={assets.clock_icon} alt="Clock Icon" />
            </div>
            <hr className="mx-4 sm:mx-6 lg:mx-8" />
            <div className="px-4 sm:px-6 lg:px-8">
                {
                    songsData.map((item, index) => (
                        <div 
                            onClick={() => playWithId(item.id)} 
                            key={item.id} 
                            className="grid grid-cols-3 sm:grid-cols-4 gap-2 items-center text-gray-300 hover:bg-gray-700 cursor-pointer p-2 rounded"
                        >
                            <p className="flex items-center">
                                <b className="mr-4 text-gray-400">{index + 1}</b>
                                <img className="inline w-10 h-10 mr-5 rounded object-cover" src={item.image} alt={item.name} />
                                {item.name}
                            </p>
                            <p className="text-sm">{albumData.name}</p>
                            <p className="text-sm hidden sm:block">5 days ago</p>
                            <p className="text-sm text-center">{item.duration}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default DisplayAlbum
