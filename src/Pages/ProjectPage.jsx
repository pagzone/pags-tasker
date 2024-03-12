import HeaderLogo from '../Assets/HeaderLogo.png';
import addSymbol from '../Assets/addSymbol.png';
import { TaskItem } from '../Components';

function ProjectPage() {
  return (
      <div className="flex h-[573px]">
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
                  <div className="text-[12px] text-secondary cursor-pointer">
                      View All
                  </div>
              </div>

              <div className="h-[230px] mx-3 font-montserrat overflow-auto">
                  <div className="my-2 mx-1">
                      <div className="text-[14px] font-bold ">Gian Carlo</div>
                      <div className="text-[12px] text-secondary text-wrap">
                          2 projects & 8 task active
                      </div>
                  </div>

                  <hr className="border-secondary w-[180px] mx-1" />
              </div>

              <button
                  className="w-[200px] text-[14px] my-3 mx-4 p-2.5 rounded-3xl border-secondary bg-midnight-900 border-[1px]
               font-montserrat font-bold"
              >
                  Invite members
              </button>
          </div>

          <div className="w-full h-[70px] px-9 py-5 flex flex-col gap-5">
              <div className=" flex justify-between items-center">
                  <input
                      className="px-4 py-2 outline-none rounded-full w-[240px] bg-midnight-900"
                      type="text"
                      placeholder="Search"
                  />
                  <div className="flex justify-between items-center w-[200px]">
                      <div className="relative">
                          <button className="w-[125px] text-white bg-primary py-2 px-4 rounded-full pl-9 font-bold shadow-lg text-[15px]">
                              Add new
                          </button>
                          <img
                              className="h-[27px] absolute  top-[5px] left-1.5"
                              src={addSymbol}
                          />
                      </div>
                      <img
                          className="rounded-full border-[1px] h-[40px] w-[40px] bg-white"
                          src=""
                          alt="profile"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ProjectPage