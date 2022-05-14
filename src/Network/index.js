import axios from "axios";

export function getGenre(setData, setLoading, setSearchData) {
   setLoading(true);
   return axios({
      method: "get",
      url: "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49",
   })
      .then(function (response) {
         setData(response.data.genres);
         setSearchData(response.data.genres);
      })
      .catch(function (error) {
         console.log(error);
      })
      .finally(() => {
         setLoading(false);
      });
}

export function getMovies(
   setData,
   setLoading,
   setSearchData,
   page,
   setPage,
) {
   setLoading(true);
   return axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`,
   })
      .then(function (response) {
         setData(response.data.results);
         setSearchData(response.data.results);
         setPage(response.data.page);
      })
      .catch(function (error) {
         console.log(error);
      })
      .finally(() => {
         setLoading(false);
      });
}

export function getDetailMovie(setData, setLoading, id) {
   setLoading(true);
   return axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1`,
   })
      .then(function (response) {
         setData(response.data);
      })
      .catch(function (error) {
         console.log(error);
      })
      .finally(() => {
         setLoading(false);
      });
}
