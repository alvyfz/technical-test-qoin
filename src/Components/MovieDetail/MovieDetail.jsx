import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../Network";
import LoadingCircle from "../Assets/Loading";

export default function MovieDetail() {
   //photo cannot be used
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const { id } = useParams();
   useEffect(() => {
      getDetailMovie(setData, setIsLoading, id);
   }, []);
   console.log(data);
   return (
      <div className=" px-3">
         {isLoading ? (
            <div className="flex flex-row justify-center text-center mt-[30]">
               <LoadingCircle />
            </div>
         ) : (
            <>
               {" "}
               <h1 className="font-medium pt-3 text-3xl">
                  {data.title}
               </h1>
               <h3 className="mt-4">
                  {data.overview}&nbsp;
                  <span className="text-primary1">
                     {data.tagline}
                  </span>{" "}
               </h3>
               <div className="grid grid-cols-4 gap-4 mt-4">
                  <p>
                     Id &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data.id}
                     </span>{" "}
                  </p>{" "}
                  <p>
                     IMDB ID &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data.imbd_id}
                     </span>{" "}
                  </p>{" "}
                  <p>
                     Genres &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data?.genres?.map((v, key) =>
                           key == 0 ? `${v.name}` : `, ${v.name}`,
                        )}
                     </span>{" "}
                  </p>
                  <p>
                     Home page&nbsp;:&nbsp;{" "}
                     <a
                        href={data.homepage}
                        className="text-primary1 font-medium"
                     >
                        {data.homepage}
                     </a>
                  </p>
                  <p>
                     Popularity &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data.popularity}
                     </span>{" "}
                  </p>
                  <p>
                     Release date &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data.release_date}
                     </span>{" "}
                  </p>{" "}
                  <p>
                     Status &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data.status}
                     </span>{" "}
                  </p>
                  <p>
                     Production countries &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data?.production_countries?.map((v, key) =>
                           key == 0 ? `${v.name}` : `, ${v.name}`,
                        )}
                     </span>{" "}
                  </p>{" "}
                  <p>
                     Production companies &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data?.production_companies?.map((v, key) =>
                           key == 0 ? `${v.name}` : `, ${v.name}`,
                        )}
                     </span>{" "}
                  </p>
                  <p>
                     Budget &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        $ {data.budget} Million
                     </span>{" "}
                  </p>
                  <p>
                     Runtime &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data.runtime} Days
                     </span>{" "}
                  </p>{" "}
                  <p>
                     Language &nbsp;:&nbsp;{" "}
                     <span className="text-primary1 font-medium">
                        {data?.spoken_languages?.map((v, key) =>
                           key == 0 ? `${v.name}` : `, ${v.name}`,
                        )}
                     </span>{" "}
                  </p>
               </div>
               <div className=" pt-10">
                  <span className="text-primary1 text-sm">
                     *Photo cannot be used
                  </span>
               </div>
            </>
         )}
      </div>
   );
}
