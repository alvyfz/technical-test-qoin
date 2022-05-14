import React from "react";
import BarCart from "./BarCart";
import {
   DangerCard,
   PrimaryCard,
   SuccessCard,
   WarningCard,
} from "./CardDasboard";
import BarCart2 from "./BarCart2";

export default function Dasboard() {
   return (
      <>
         <div className="h-screen px-3">
            <h1 className="font-medium pt-3 text-3xl">Dashboard</h1>
            <div className=" w-full mt-1">
               <input
                  className="w-full bg-bg1 h-10 px-4"
                  placeholder="Dasboard"
               />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
               <PrimaryCard title="Primary Card" />
               <WarningCard title="Warning Card" />
               <SuccessCard title="Success Card" />
               <DangerCard title="Danger Card" />
            </div>
            <div className="grid grid-cols-2 gap-3 ">
               <BarCart />
               <BarCart2 />
            </div>
         </div>
      </>
   );
}
