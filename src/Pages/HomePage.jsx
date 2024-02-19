import React from 'react'
import TwoMen from '../Assets/TwoMen.png';

const HomePage = () => {
  return (
      <div className="flex h-[514px]">
          <div className="w-[717px] flex flex-col flex-grow justify-center break-words">
              <h1 className="font-montserrat text-white text-[96px] break-words font-bold">
                  Lorem Ipsum
              </h1>
              <p className="font-poppins text-secondary text-[26px] w-[50rem] break-words">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                  ipsa totam, numquam architecto dolor ut reprehenderit expedita
                  laudantium eos illum.
              </p>
              <div className="flex flex-row gap-3">
                  <button className="text-white bg-primary py-2 px-3 rounded-md font-bold">
                      New project
                  </button>
                  <div>
                      <input
                          className="px-3 py-2 outline-none rounded-md border-[1px] border-secondary text-midnight-900"
                          type="text"
                          placeholder="Enter a code or a link"
                      />
                  </div>
                  <button className="font-bold text-secondary">Join</button>
              </div>
          </div>
          <div className="flex flex-shrink justify-center items-center">
              <img src={TwoMen} className="w-[414px] h-[414px]" />
          </div>
      </div>
  );
}

export default HomePage