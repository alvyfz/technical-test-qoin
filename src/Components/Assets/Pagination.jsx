import { Icon } from "@iconify/react";
import React from "react";

export default function Pagination({ page, setPage, searchData }) {
   const HandlePrev = () => {
      if (page > 0) {
         setPage(page - 1);
      }
   };
   const HandleNext = () => {
      setPage(page + 1);
   };

   return (
      <>
         {searchData.length < 0 ? null : (
            <div className="flex  justify-center text-sm pb-4">
               <div className="flex space-x-3">
                  <button className="p-1 px-2" onClick={HandlePrev}>
                     {" "}
                     <Icon
                        icon="bxs:chevron-left"
                        color="#878D96"
                        fontSize={18}
                     />{" "}
                  </button>
                  <div className="flex space-x-3 mt-0.5">
                     <span className="font-medium text-primary1">
                        {page}
                     </span>
                  </div>
                  <button className="p-1  px-2" onClick={HandleNext}>
                     {" "}
                     <Icon
                        icon="bxs:chevron-right"
                        color="#878D96"
                        fontSize={18}
                     />{" "}
                  </button>
               </div>
            </div>
         )}
      </>
   );
}
