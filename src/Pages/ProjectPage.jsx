import HeaderLogo from "../Assets/HeaderLogo.png";
import addLogo from "../Assets/addLogo.png";
import TaskBoard from "../Components/TaskBoard";

const ProjectPage = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-midnight-900 w-[230px] ">
                <div className="bg-[#2CB67D] p-3">
                    <img
                        className="h-10"
                        src={HeaderLogo}
                        alt="Pag's Tasker logo"
                    />
                </div>

                <div className="flex font-montserrat font-bold p-3 justify-between items-center">
                    <div className="text-[14px]">MEMBERS</div>
                    <div className="text-[12px] text-secondary transition cursor-pointer hover:text-[#d1d5db] active:text-[#9ca3af]">
                        View All
                    </div>
                </div>

                <div className="max-h-[300px] mx-3 font-montserrat overflow-auto">
                    <div className="my-3 mx-1 px-1">
                        <div className="text-[14px] font-bold ">Gian Carlo</div>
                        <div className="text-[12px] text-secondary text-wrap">
                            2 projects & 8 task active
                        </div>
                    </div>

                    <hr className="border-secondary w-[180px] mx-1" />
                </div>

                <button
                    className="w-[200px] cursor-pointer text-[14px] my-3 mx-4 p-2.5 rounded-3xl border-secondary bg-midnight-900 border-[1px]
                  font-montserrat font-bold transition hover:bg-midnight-700 active:bg-[#16161b]"
                >
                    Invite members
                </button>
            </div>

            <div className="w-full h-[70px] px-9 py-5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <input
                        className="px-4 py-2 outline-none rounded-full w-[240px] bg-midnight-900"
                        type="text"
                        placeholder="Search"
                    />
                    <div className="flex justify-between items-center w-[200px]">
                        <div className="relative">
                            <button className="w-[125px] cursor-pointer text-white bg-primary py-2 px-4 rounded-full pl-9 font-bold shadow-lg text-[15px]
                           hover:bg-violet-600 active:bg-violet-700 ">
                                Add new
                            </button>
                            <img
                                className="h-[27px] absolute  top-[5px] left-1.5"
                                src={addLogo} alt="add-symbol"
                            />
                        </div>
                        <img
                            className="rounded-full border-[1px] h-[40px] w-[40px] bg-white cursor-pointer"
                            src=""
                            alt="profile"
                        />
                    </div>
                </div>
                  <TaskBoard/>
            </div>
        </div>
    );
};

export default ProjectPage;
