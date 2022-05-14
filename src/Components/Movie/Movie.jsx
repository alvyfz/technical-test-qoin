import { useState, useEffect, Fragment } from "react";
import { getMovies } from "../../Network";
import LoadingCircle from "../Assets/Loading";
import Pagination from "../Assets/Pagination";
import { useNavigate } from "react-router-dom";

export default function Genre() {
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);
   const [search, setSearch] = useState("");
   const [searchData, setSearchData] = useState([]);
   const [page, setPage] = useState(1);
   const navigate = useNavigate();

   useEffect(() => {
      getMovies(setData, setIsLoading, setSearchData, page, setPage);
   }, [page]);

   const navigateToDetail = (id) => {
      navigate(`/movie/${id}`);
   };

   const handleSearch = (e) => {
      let searching = e.target.value;
      setSearch(searching);
      if (searching.length > 0) {
         setSearchData(
            data.filter(
               (v) =>
                  v.title
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
            <h1 className="font-medium pt-3 text-3xl">Movie</h1>
            <div className=" mt-1">
               <input
                  className="w-full bg-bg1 h-10 px-4"
                  placeholder="Search movie..."
                  onChange={handleSearch}
                  value={search}
               />
            </div>
            <table className=" text-left table-fixed w-full mt-5 ">
               <thead className="my-1 text-md">
                  <tr className="text-md font-medium">
                     <th className=" font-medium ">Id</th>
                     <th className=" font-medium">Title</th>
                     <th className=" font-medium">Release</th>
                     <th className=" font-medium">Rating</th>
                     <th className=" font-medium">Popularity</th>
                     <th className=" font-medium">Language</th>
                  </tr>
               </thead>
               <tbody>
                  {isLoading ? (
                     <tr>
                        <td colSpan={6}>
                           <div className=" text-center pt-[17rem]">
                              {" "}
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
                                       <tr
                                          className="cursor-pointer "
                                          onClick={() =>
                                             navigateToDetail(v.id)
                                          }
                                       >
                                          <td className=" text-text1 pt-2 pb-2 border-b border-bg1">
                                             {v.id}
                                          </td>
                                          <td className="text-text1 truncate  px-1 pt-2 pb-2  border-b border-bg1 ">
                                             {v.title}
                                          </td>{" "}
                                          <td className="text-text1 truncate  px-1 pt-2 pb-2  border-b border-bg1 ">
                                             {v.release_date}
                                          </td>{" "}
                                          <td className="text-text1 truncate  px-1 pt-2 pb-2  border-b border-bg1 ">
                                             {v.vote_average}
                                          </td>{" "}
                                          <td className="text-text1 truncate  px-1 pt-2 pb-2  border-b border-bg1 ">
                                             {v.popularity}
                                          </td>{" "}
                                          <td className="text-text1 truncate  px-1 pt-2 pb-2  border-b border-bg1 ">
                                             {v.original_language}
                                          </td>
                                       </tr>
                                    </Fragment>
                                 );
                              })}
                           </>
                        ) : (
                           <tr>
                              <td colSpan={6}>
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
            {isLoading || searchData.length === 0 ? null : (
               <div className="py-4">
                  <Pagination
                     page={page}
                     setPage={setPage}
                     searchData={searchData}
                  />
               </div>
            )}
         </div>
      </>
   );
}
