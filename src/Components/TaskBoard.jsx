import React from "react";
import TaskItem from "./TaskItem";

const TaskBoard = () => {
    return (
        <div className="font-montserrat">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Task Board</h1>
            </div>
            <div className="task-board-header text-xl my-2 text-secondary grid justify-between font-bold px-6 w-full grid-cols-task-board">
                <div className="flex flex-1 justify-between">
                    <p className="grow">Task</p>
                    <div className="flex flex-1 justify-between items-center">
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
