import React from 'react';
import TwoMen from '../Assets/TwoMen.png';
import linkLogo from '../Assets/linkLogo.png';

const HomePage = () => {
  return (
      <div className="flex h-[514px] gap-12">
          <div className="w-[717px] flex flex-col flex-grow justify-center break-words">
              <h1 className="font-montserrat text-white text-[96px] break-words font-bold">
                  Nigga's Tasker
              </h1>
              <p className="mb-4 font-poppins text-secondary text-[26px] w-[44rem] break-words">
                  A user-friendly task manager that simplifies collaboration.
                  Just share a link to your project or task, and start working
                  together effortlessly – as easy as Google Meet!
              </p>
              <div className="flex flex-row gap-3">
                  <button className="text-white bg-primary py-2 px-3 rounded-md font-bold mr-4">
                      New project
                  </button>
                  <div className="relative">
                      <input
                          className="px-3 py-2 outline-none rounded-md border-[1px] border-secondary text-white bg-midnight-900 pl-9 max-w[150px]"
                          type="text"
                          placeholder="Enter a code or a link."
                      />
                      <img
                          className="absolute top-[10px] left-3 h-6"
                          src={linkLogo}
                          alt="link-logo"
                      />
                  </div>
                  <button className="font-bold text-secondary">Join</button>
              </div>
          </div>
          <div className="flex flex-shrink justify-center items-center ">
              <img
                  src={TwoMen}
                  alt="two men around a table"
                  className="w-[380px] h-[380px]"
              />
          </div>
      </div>
  );
}

export default HomePage