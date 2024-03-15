import React from "react";
import KebabMenu from "../Assets/KebabMenu.png"

const TaskItem = ({ projectId }) => {
    return (
        <div className="w-full flex items-center">
            <div className="grid grid-cols-task-board w-full">
                <div
                    className="w-full grid grid-cols-2 font-poppins font-bold text-secondary bg-darkCharcoal h-20 rounded-md
                               items-center px-7 shadow-md shadow-midnight-750 cursor-pointer transiton hover:bg-midnight-700
                               active:bg-[#16161b]"
                >
                    <p className="text-l grow">Project Name</p>
                    <div className="grid grid-cols-4 justify-between flex-1 items-center">
                        <p className="text-base ml-2">End Date</p>
                        <div className="rounded-sm text-white bg-green-400 px-2 py-1 w-fit">
                            <p className="text-sm">Not Started</p>
                        </div>
                        <p className="text-base text-center">0%</p>
                        <div>
                            <img
                                width={30}
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="edit icon"
                            />
                        </div>
                    </div>
                </div>

                <button className="">
                    <img
                        src={KebabMenu}
                        alt="kebab menu"
                        height={35}
                        width={35}
                    />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
