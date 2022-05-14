import React from "react";
import { Icon } from "@iconify/react";

function PrimaryCard({ title }) {
   return (
      <>
         <div className=" h-[200px]">
            <div className="bg-blue-700 text-white h-[6rem] p-2 rounded-t-md">
               <h4>{title}</h4>
            </div>
            <div className="bg-blue-800 flex  justify-between text-white h-[3rem] rounded-b-md py-3 px-2 cursor-pointer">
               <h5>View Details</h5>
               <Icon icon="eva:arrow-ios-forward-fill" width={16} />
            </div>
         </div>
      </>
   );
}

function WarningCard({ title }) {
   return (
      <>
         <div className=" h-[200px]">
            <div className="bg-yellow-700 text-white h-[6rem] p-2 rounded-t-md">
               <h4>{title}</h4>
            </div>
            <div className="bg-yellow-800 flex  justify-between text-white h-[3rem] rounded-b-md py-3 px-2 cursor-pointer">
               <h5>View Details</h5>
               <Icon icon="eva:arrow-ios-forward-fill" width={16} />
            </div>
         </div>
      </>
   );
}

function SuccessCard({ title }) {
   return (
      <>
         <div className=" h-[200px]">
            <div className="bg-green-700 text-white h-[6rem] p-2 rounded-t-md">
               <h4>{title}</h4>
            </div>
            <div className="bg-green-800 flex  justify-between text-white h-[3rem] rounded-b-md py-3 px-2 cursor-pointer">
               <h5>View Details</h5>
               <Icon icon="eva:arrow-ios-forward-fill" width={16} />
            </div>
         </div>
      </>
   );
}

function DangerCard({ title }) {
   return (
      <>
         <div className=" h-[200px]">
            <div className="bg-red-700 text-white h-[6rem] p-2 rounded-t-md">
               <h4>{title}</h4>
            </div>
            <div className="bg-red-800 flex  justify-between text-white h-[3rem] rounded-b-md py-3 px-2 cursor-pointer">
               <h5>View Details</h5>
               <Icon icon="eva:arrow-ios-forward-fill" width={16} />
            </div>
         </div>
      </>
   );
}

export { PrimaryCard, WarningCard, SuccessCard, DangerCard };
