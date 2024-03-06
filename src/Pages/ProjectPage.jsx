import HeaderLogo from '../Assets/HeaderLogo.png';
function ProjectPage() {
  return (

    <div className="flex h-[573px] gap-12">  
       <div className="bg-midnight-900 w-[230px] ">
          <div className="bg-[#2CB67D] p-2">
             <img className="h-10" src={HeaderLogo} alt="Pag's Tasker logo" />
          </div>
           <div className="flex font-montserrat font-bold p-3 justify-between items-center">
              <div className="text-[14px]">MEMBERS</div>
              <div className="text-[12px] text-secondary cursor-pointer">View All</div>
           </div>
          
           <div className="h-[230px] m-3 font-montserrat overflow-auto"> 
              <div className="my-4 mx-1">
                <div className="text-[14px] font-bold ">Gian Carlo</div>
                <div className="text-[12px] text-secondary text-wrap">2 projects & 8 task active</div>
              </div>
            
            <hr className="border-secondary w-[180px] mx-1"/>

       
           </div>
         
           <button className="w-[200px] text-[14px] mx-4 p-2.5 rounded-3xl border-secondary bg-midnight-900
               font-montserrat font-bold">Invite members</button>
       
       </div>




    </div>
  )
}

export default ProjectPage