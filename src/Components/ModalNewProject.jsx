import React, { useState } from 'react'
import { Toaster, toast } from 'sonner'

const ModalNewProject = ({ onCancel }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [countWord, setCountWord] = useState(0);

  const handleProjectNameChange = (e) => {
      const name = e.target.value;
      setProjectName(name);
  };

  const handleDescriptionChange = (e) => {
      const desc = e.target.value;
      setDescription(desc);
      setCountWord(desc.length);
  };

  const handleCreateProject = () => {
      if (!projectName.trim()) {
          toast.error('Please provide a project name.');
          return;
      }       
  
  };

  return (
    <div className="w-96 pt-3 px-4 font-montserrat">
        <form>
            <input className='bg-midnight-900 py-3 px-3 rounded-md text-white focus:outline-none w-full'
                   placeholder='Project name' 
                   value={projectName}
                   onChange={handleProjectNameChange}/>

            <div className='relative'>
                <textarea className='h-[100px] text-secondary bg-midnight-900 p-2 my-3 rounded-md outline-none w-full resize-none' 
                          placeholder='Description' 
                          id='project-description'
                          value={description}
                          maxLength={75}
                          onChange={handleDescriptionChange}></textarea>
                <span className='absolute bottom-6 right-2 text-xs select-none'>{countWord} / 75</span>
            </div>    
        </form>

        <Toaster richColors position="bottom-right" />

            <div className='flex mt-1 justify-end '>
                <button className='text-white bg-primary py-1 px-3 rounded-md font-bold'
                        onClick={handleCreateProject}
                >Create</button>
                <button className='font-semibold text-[#94A1B2] ml-3' onClick={onCancel}>Cancel</button>
            </div> 
    </div>
  )
}

export default ModalNewProject