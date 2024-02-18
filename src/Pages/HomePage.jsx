import React from 'react'
import TwoMen from '../Assets/TwoMen.png';

const HomePage = () => {
  return (
      <div className='flex h-[514px]'>
        <div className='w-[717px] flex flex-col justify-center'>
          <h1 className='text-[96px]'>Lorem Ipsum</h1>
          <p className='text-secondary text-[26px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsa totam, numquam architecto dolor ut reprehenderit expedita laudantium eos illum.</p>
          <div className='flex flex-row gap-3'>
            <button className='bg-primary py-2 px-3 rounded-md font-bold'>New project</button>
            <div>
              <input className='px-3 py-2 outline-none rounded-md border-2 border-secondary text-midnight-900' type='text' placeholder='Enter a code or a link' />
            </div>
            <button className='font-bold text-secondary'>Join</button>
          </div>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <img src={TwoMen} className='w-[414px] h-[414px]' />
        </div>
      </div>
  )
}

export default HomePage