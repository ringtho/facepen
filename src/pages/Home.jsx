import React from 'react'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-start h-screen'>
      <div className='relative h-full w-full'>
        <video 
            src={shareVideo}
            type='video/mp4'
            loop
            autoPlay
            controls={false}
            muted
            className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default Home
