import axios from "axios";
const API_KEY = "37d86de19aae4dac71f6012a4c4d32a4";
const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2Q4NmRlMTlhYWU0ZGFjNzFmNjAxMmE0YzRkMzJhNCIsIm5iZiI6MTczMzkyODY3My4wNzEsInN1YiI6IjY3NTlhNmUxMGIxNWJkYjllYzFmM2Y3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JpKxGJrFS2TneS0T4DEfvLS5FYtYpMK-e-rO9gzj-FQ",
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await instance.get("/trending/movie/day");
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const fetchMoviesByQuery = async (query) => {
  try {
    const { data } = await instance.get("/search/movie", {
      params: { query, include_adult: false, language: "en-US", page: 1 },
    });
    return data.results;
  } catch (error) {
    console.error("Error fetching movies by query:", error);
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await instance.get(`/movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
  }
};
