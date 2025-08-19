import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-6 absolute text-white">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="py-6 text-lg max-w-xl mb-6">{overview}</p>
      <div className="space-x-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Play</button>
        <button className="bg-white/30 text-white px-4 py-2 rounded hover:bg-white/50">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle; 
