/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */

export default function DropdownNavbar() {
   return (
      <>
         <div className="inline-flex justify-center my-1 w-full  bg-bg1 text-sm font-medium ">
            <div
               className=" w-7 h-7 flex mr-2 text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
               id="user-menu-button"
            >
               <img
                  className="  rounded-full object-cover "
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
               />
            </div>
            <span className="pt-1 pr-2 font-normal font-text1 hidden md:block">
               Muhammad Alvy Eka Fauzi
            </span>
            <span className="pt-3">
               <svg
                  width="10"
                  height="8"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM7 7L6.29289 7.70711L7 8.41421L7.70711 7.70711L7 7ZM13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L13.7071 1.70711ZM0.292893 1.70711L6.29289 7.70711L7.70711 6.29289L1.70711 0.292893L0.292893 1.70711ZM7.70711 7.70711L13.7071 1.70711L12.2929 0.292893L6.29289 6.29289L7.70711 7.70711Z"
                     fill="#121619"
                  />
               </svg>
            </span>
         </div>
      </>
   );
}
