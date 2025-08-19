import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-24 absolute text-white bg-gradient-to-l from to-black">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="py-6 text-lg max-w-xl mb-6">{overview}</p>
      <div className="space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-amber-50">▶️ Play</button>
        <button className="bg-white/30 text-white px-4 py-2 rounded hover:bg-white/50">ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle; 
