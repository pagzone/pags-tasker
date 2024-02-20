import React, { useState } from 'react'

const Modal = ({ isOpen, onClose, children }) => {
    const [open, setOpen] = useState(isOpen);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            {open && children && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-midnight-850 p-5 rounded">
                        {!onClose && (
                            <span
                                className="absolute select-none top-2 right-2 text-lg cursor-pointer text-gray-600"
                                onClick={handleClose}
                            >
                                &times;
                            </span>
                        )}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal