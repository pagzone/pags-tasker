import React from "react";
import TaskItem from "./TaskItem";
import MyListbox from "./ListBox";
const TaskBoard = () => {
    return (
        <div className="font-montserrat">
            <div className="flex items-center justify-between my-4">
                <h1 className="text-2xl font-bold">Task Board</h1>
                <MyListbox/>
            </div>
            <div className="task-board-header text-xl my-2 text-secondary grid justify-between font-bold px-6 w-full grid-cols-task-board">
                <div className="grid grid-cols-2 justify-between">
                    <p className="grow">Task</p>
                    <div className="grid grid-cols-4 justify-between items-center">
                        <p>End Date</p>
                        <p>Status</p>
                        <p>Progress</p>
                        <p>Assignees</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="task-list font-poppins flex flex-col gap-3">
                <TaskItem />
                <TaskItem />
            </div>
        </div>
    );
};

export default TaskBoard;
