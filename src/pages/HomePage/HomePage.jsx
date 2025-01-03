import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../tmdbApi";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(setMovies)
      .catch((error) =>
        console.error("Error fetching trending movies:", error)
      );
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
