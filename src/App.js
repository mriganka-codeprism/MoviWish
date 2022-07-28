import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import InfiniteScroll from "./components/MovieList";
import Navbar from "./UI/Navbar";

const App = () => {
  const [items, setItems] = useState([]);
  const page = useSelector((state) => state.favorite.page);
  const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      const query = await fetch(
        `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${tmdbApiKey}`
      );

      if (query.status !== 200) return console.log(query.statusText);

      const response = await query.json();

      setItems(state => [...state, ...response.results]);
    };

    fetchMovies().catch((err) => {
      err.message = "Please check your internet connection";
    });
  }, [page]);

  console.log(page)

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="false"
        sx={{ backgroundColor: `rgba(10, 25, 41)`, minHeight: "100vh" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<InfiniteScroll items={items} />} />
          <Route path="/wishlist" element={<Favorites />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
