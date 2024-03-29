import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import "./movie.css";
import Search from "./search";
import Notification from "./notification";

export default function Movie() {
  const queryClient = useQueryClient();
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([]);

  const { isLoading, error, data } = useQuery("movies", () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=97f88266e64b0c8a3cadc7051fb577de"
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  });

  const handleSearch = (query) => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title &&
        movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredMovies);
  };

  useEffect(() => {
    if (!isLoading) {
      setMovies(data.results);
    }
  }, [isLoading, data]);

  if (error) {
    return <div>Error fetching movies</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-page">
      <Notification />
      <Search handleSearch={handleSearch} />

      <ul className="movie-list">
        {(searchResults.length > 0 ? searchResults : movies).map((movie) => (
          <li key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-overview">{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}