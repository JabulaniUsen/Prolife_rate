import React from 'react'
import loadingGif from '../Assets/tenor.gif'

const Loading = () => {
  return (
    <div className='bg-[#00000067] absolute h-full w-full flex items-center justify-center m-auto'>
        <img src={loadingGif} alt="Loading" />
    </div>
  )
}

export default Loading