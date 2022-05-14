import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import DashboardPage from "./Pages/DashboardPage";
import GenrePage from "./Pages/GenrePage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import MoviePage from "./Pages/MoviePage";

function App() {
  document.title = "Muhammad Alvy Eka Fauzi";

  return (
    <BrowserRouter>
      <Navigation />
      <div className="px-[5rem] ">
        <Routes>
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
