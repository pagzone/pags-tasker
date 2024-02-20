import React, { useState } from 'react'
const ModalNewProject = () => {
   const [countWord, setCountWord] = useState(0)

   const handleCountWord = (e) => {
      const length = e.target.value.length
      setCountWord(length);
   }

  return (
    <div className="w-[300px] py-3 px-4 ">

        <input className='bg-midnight-900 py-2 px-3 rounded-md text-white focus:outline-none w-full'
         placeholder='Project name'/>

       <div className='relative'>
           <textarea className='h-[100px] text-secondary bg-midnight-900 p-2 my-3 rounded-md outline-none w-full resize-none' 
            placeholder='Description' 
            id='project-desciption'
            maxLength={75}
            onChange={(e) => {handleCountWord(e)}}></textarea>
           <span className='absolute bottom-6 right-2 text-xs'>{countWord} / 75</span>
        </div>    
        
        <div className='flex m-1 justify-end '>
            <button className='text-white bg-primary py-1 px-3 rounded-md font-bold'>Create</button>
            <button className='font-semibold text-[#94A1B2] ml-3'>Cancel</button>
        </div> 
    </div>
  )
}

export default ModalNewProject