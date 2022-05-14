import IconMenu from "./IconMenu";
import IconNotif from "./IconNotif";
import DropdownNavbar from "./MenuDropdownNavbar";
import Sidebar from "./Sidebar";
import useComponentVisible from "../../Utils/Hooks/useComponentVisible";

function Navbar() {
   const { ref, isComponentVisible, setIsComponentVisible } =
      useComponentVisible();

   return (
      <>
         <nav className="bg-bg1 h-14 border-gray-200 px-4 py-2.5 drop-shadow-sm sticky top-0 z-10">
            <div className="flex flex-wrap justify-between items-center mx-auto">
               <div className="flex">
                  <button
                     type="button"
                     ref={ref}
                     onClick={() =>
                        setIsComponentVisible(!isComponentVisible)
                     }
                  >
                     <IconMenu />
                  </button>

                  <div className="mx-5 h-full">
                     <span className="font-medium text-xl text-primary1">
                        Admin
                     </span>
                  </div>
               </div>

               <div className="flex w-400 ">
                  <div>
                     <button
                        className="pt-2 md:pr-4 pr-2 sm:h-1"
                        type="button"
                     >
                        <IconNotif />
                     </button>
                  </div>
                  <span>
                     <svg
                        width="1"
                        height="40"
                        viewBox="0 0 1 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <line
                           x1="0.5"
                           y1="-2.18557e-08"
                           x2="0.500002"
                           y2="35"
                           stroke="#F2F4F8"
                        />
                     </svg>
                  </span>
                  <DropdownNavbar />
               </div>
            </div>
         </nav>
         <div>
            <Sidebar
               onSidebar={isComponentVisible}
               setIsComponentVisible={setIsComponentVisible}
            />
         </div>
      </>
   );
}

export default Navbar;
