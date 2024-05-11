import React from 'react'
import loadingGif from '../Assets/tenor.gif'

const Loading = () => {
  return (
    <div className='absolute h-full w-full flex items-center justify-center m-auto'>
        <img src={loadingGif} className='lg:ml-[-450px] w-[200px] mt-[-100px]' alt="Loading" />
    </div>
  )
}

export default Loading