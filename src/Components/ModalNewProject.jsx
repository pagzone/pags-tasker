import React, { useState } from 'react'
import { Link } from "react-router-dom"

const ModalNewProject = ({ onCancel }) => {
   const [countWord, setCountWord] = useState(0)

   const handleCountWord = (e) => {
      const length = e.target.value.length
      setCountWord(length);
   }

  return (
    <div className="w-96 pt-3 px-4 font-montserrat">

        <input className='bg-midnight-900 py-3 px-3 rounded-md text-white focus:outline-none w-full'
         placeholder='Project name'/>

       <div className='relative'>
           <textarea className='h-[100px] text-secondary bg-midnight-900 p-2 my-3 rounded-md outline-none w-full resize-none' 
            placeholder='Description' 
            id='project-description'
            maxLength={75}
            onChange={(e) => {handleCountWord(e)}}></textarea>
           <span className='absolute bottom-6 right-2 text-xs select-none'>{countWord} / 75</span>
        </div>    
        
        <div className='flex mt-1 justify-end '>
            <button className='text-white bg-primary py-1 px-3 rounded-md font-bold'>Create</button>
            <button className='font-semibold text-[#94A1B2] ml-3' onClick={onCancel}>Cancel</button>
        </div> 
    </div>
  )
}

export default ModalNewProject