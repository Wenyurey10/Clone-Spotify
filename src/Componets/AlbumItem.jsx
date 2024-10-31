import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="
        min-w-[180px] 
        p-4 
        rounded 
        cursor-pointer 
        hover:bg-[#ffffff26] 
        flex 
        flex-col 
        items-center 
        transition 
        duration-300 
        ease-in-out
        sm:min-w-[140px] 
        sm:p-3
        xs:min-w-[120px] 
        xs:p-2
      "
    >
      <img className="rounded w-full h-auto object-cover" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1 text-lg sm:text-base xs:text-sm text-center">
        {name}
      </p>
      <p className="text-slate-200 text-sm sm:text-xs xs:text-[10px] text-center">
        {desc}
      </p>
    </div>
  )
}

export default AlbumItem
