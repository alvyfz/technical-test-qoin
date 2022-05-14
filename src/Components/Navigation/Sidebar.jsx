/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const SidebarState = {
   home: false,
   genre: false,
   movie: false,
};

export default function Sidebar({ onSidebar }) {
   const { pathname } = useLocation();

   const [sidebarState, setSidebarState] = useState(SidebarState);

   useEffect(() => {
      const url = pathname.split("/");
      let first = url[1];

      switch (first) {
         case "genre":
            first = "genre";
            break;
         case "movie":
            first = "movie";
            break;
         default:
            break;
      }

      setSidebarState({
         ...SidebarState,
         [first]: true,
      });
   }, [pathname]);

   return (
      <div
         className={`transition-all duration-150 fixed z-10 ${
            onSidebar ? "w-48" : "w-16"
         }`}
      >
         <div className="sm:relative h-screen flex-col justify-between flex sm:flex">
            <ul className="bg-bg1 min-h-screen">
               <li>
                  <Link to="/dashboard">
                     <div
                        className={`flex w-full justify-between text-primary1 cursor-pointer items-center ${
                           sidebarState.dashboard && !onSidebar
                              ? "bg-bg3"
                              : sidebarState.dashboard && onSidebar
                              ? "bg-bg4"
                              : "bg-bg1 hover:bg-white"
                        }`}
                     >
                        <div className="flex items-center">
                           {sidebarState.dashboard ? (
                              <div className="translate-x-0 bg-primary1 h-[4.25rem] w-2" />
                           ) : (
                              <div className="-translate-x-5 bg-primary1 h-[4.25rem] w-2" />
                           )}

                           <div className="flex items-center px-3 py-5">
                              <Icon
                                 icon="ic:outline-dashboard"
                                 width={28}
                              />

                              <span
                                 className={`transition delay-300 duration-700 ease-in-out font-medium ml-2 min-w-max ${
                                    onSidebar ? "block" : "hidden"
                                 }`}
                              >
                                 Dashboard
                              </span>
                           </div>
                        </div>
                     </div>
                  </Link>
               </li>

               <li>
                  <Link to="/genre">
                     <div
                        className={`flex w-full justify-between text-primary1 cursor-pointer items-center ${
                           sidebarState.genre && !onSidebar
                              ? "bg-bg3"
                              : sidebarState.genre && onSidebar
                              ? "bg-bg4"
                              : "bg-bg1 hover:bg-white"
                        }`}
                     >
                        <div className="flex items-center">
                           {sidebarState.genre ? (
                              <div className="translate-x-0 bg-primary1 h-[4.25rem] w-2" />
                           ) : (
                              <div className="-translate-x-5 bg-bg1 h-[4.25rem] w-2" />
                           )}

                           <div className="flex items-center px-3 py-5">
                              <Icon
                                 icon="carbon:graphical-data-flow"
                                 width={28}
                              />

                              <span
                                 className={`transition delay-300 duration-700 ease-in-out font-medium ml-2 min-w-max ${
                                    onSidebar ? "block" : "hidden"
                                 }`}
                              >
                                 Genre
                              </span>
                           </div>
                        </div>
                     </div>
                  </Link>
               </li>

               <li>
                  <Link to="/movie">
                     <div
                        className={`flex w-full justify-between text-primary1 cursor-pointer items-center ${
                           sidebarState.movie && !onSidebar
                              ? "bg-bg3"
                              : sidebarState.movie && onSidebar
                              ? "bg-bg4"
                              : "bg-bg1 hover:bg-white"
                        }`}
                     >
                        <div className="flex items-center">
                           {sidebarState.movie ? (
                              <div className="translate-x-0 bg-primary1 h-[4.25rem] w-2" />
                           ) : (
                              <div className="-translate-x-5 bg-bg1 h-[4.25rem] w-2" />
                           )}

                           <div className="flex items-center px-3 py-5">
                              <Icon
                                 icon="fluent:movies-and-tv-16-regular"
                                 width={28}
                              />

                              <span
                                 className={`transition delay-300 duration-700 ease-in-out font-medium ml-2 min-w-max ${
                                    onSidebar ? "block" : "hidden"
                                 }`}
                              >
                                 Movie
                              </span>
                           </div>
                        </div>
                     </div>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}
