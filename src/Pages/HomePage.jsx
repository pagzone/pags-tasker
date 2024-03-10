import React, { useState } from 'react';
import TwoMen from '../Assets/TwoMen.png';
import linkLogo from '../Assets/linkLogo.png';
import { ModalNewProject } from '../Components';
import Modal from 'react-modal';
import clsx from 'clsx';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasInputValue , setHasInputValue] = useState(false);

     const handleValue = (e) => {
        const value = e.target.value.length

        if (value > 0)
           setHasInputValue(true);
        else 
           setHasInputValue(false);
     }

    const handleClick = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const addHover = clsx(
        hasInputValue && "hover:text-primary",
        hasInputValue && "hover:bg-primary",
        hasInputValue && "hover:bg-opacity-10"
    )


    return (
        <>
            <div className="flex h-[514px] gap-12">
                <div className="w-[717px] flex flex-col flex-grow justify-center break-words">
                    <h1 className="font-montserrat text-white text-[96px] break-words font-bold">
                        Pag's Tasker
                    </h1>
                    <p className="mb-4 font-poppins text-secondary text-[26px] w-[44rem] break-words">
                        A user-friendly task manager that simplifies
                        collaboration. Just share a link to your project or
                        task, and start working together effortlessly!
                    </p>
                    <div className="flex flex-row gap-3">
                        <button
                            className="text-white bg-primary py-2 px-3 rounded-md font-bold mr-4 shadow-lg"
                            onClick={handleClick}
                        >
                            New project
                        </button>
                        <div className="relative">
                            <input
                                className="px-3 py-2 outline-none rounded-md border-[1px] border-secondary text-white bg-midnight-900 pl-9 max-w[150px]"
                                type="text"
                                placeholder="Enter a code or a link."
                                onChange={(e) => {handleValue(e)} }
                            />
                            <img
                                className="absolute top-[10px] left-3 h-6"
                                src={linkLogo}
                                alt="link-logo"
                            />
                        </div>
                        <button className={`px-3 py-2 rounded-md font-bold text-secondary ${addHover}`} disabled={!hasInputValue}>
                            Join
                        </button>
                    </div>
                </div>
                <div className="flex flex-shrink justify-center items-center">
                    <img
                        src={TwoMen}
                        alt="two men around a table"
                        className="w-[380px] h-[380px]"
                    />
                </div>
            </div>
            {isOpen && (
                <Modal
                    isOpen={true}
                    className=" bg-midnight-850 p-5 rounded-md shadow-3xl "
                    overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25"
                >
                    <ModalNewProject onCancel={handleCloseModal} />
                </Modal>
            )}
        </>
    );
}

export default HomePage