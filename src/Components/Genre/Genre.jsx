import { useState, useEffect, Fragment } from "react";
import { getGenre } from "../../Network";
import LoadingCircle from "../Assets/Loading";

export default function Genre() {
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);
   const [search, setSearch] = useState("");
   const [searchData, setSearchData] = useState(data);

   useEffect(() => {
      getGenre(setData, setIsLoading, setSearchData);
   }, []);

   const handleSearch = (e) => {
      let searching = e.target.value;
      setSearch(searching);
      if (searching.length > 0) {
         setSearchData(
            data.filter(
               (v) =>
                  v.name
                     .toLowerCase()
                     .includes(searching.toLowerCase()) ||
                  v.id.toString().includes(searching),
            ),
         );
      } else {
         setSearchData(data);
      }
   };

   return (
      <>
         <div className="h-screen px-3">
            <h1 className="font-medium pt-3 text-3xl">Genre</h1>
            <div className=" w-[50%] mt-1">
               <input
                  className="w-full bg-bg1 h-10 px-4"
                  placeholder="Search genre..."
                  onChange={handleSearch}
                  value={search}
               />
            </div>
            <div>
               <table className=" text-left table-fixed w-[50%] mt-5 ">
                  <thead className="my-1 text-md">
                     <tr className="text-md font-medium">
                        <th className=" font-medium ">Id</th>
                        <th className=" font-medium">Name</th>
                     </tr>
                  </thead>
                  <tbody>
                     {isLoading ? (
                        <tr>
                           <td colSpan={2}>
                              <div className=" text-center pt-[17rem]">
                                 <LoadingCircle />
                              </div>
                           </td>
                        </tr>
                     ) : (
                        <>
                           {searchData.length > 0 ? (
                              <>
                                 {searchData?.map((v, i) => {
                                    return (
                                       <Fragment key={i}>
                                          <tr>
                                             <td className=" text-text1 pt-2 pb-2 w-12 border-b border-bg1">
                                                {v.id}
                                             </td>
                                             <td className="text-text1 truncate max-w-[18rem] px-1 pt-2 pb-2  border-b border-bg1 ">
                                                {v.name}
                                             </td>
                                          </tr>
                                       </Fragment>
                                    );
                                 })}
                              </>
                           ) : (
                              <tr>
                                 <td colSpan={2}>
                                    <div className="flex justify-center mt-[14rem]">
                                       {" "}
                                       <h1>No Data</h1>
                                    </div>{" "}
                                 </td>
                              </tr>
                           )}
                        </>
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}
