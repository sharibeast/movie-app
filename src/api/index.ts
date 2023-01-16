import axios from 'axios';

export interface PopularMovies {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  release_date: string;
}

const API_KEY = '71dff2b9ee94145531dfee2bace847c6';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const UPCOMINGURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
// const SIMILAR_MOVIES = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const getPopularMovies = async () => {
  const res = await axios.get(URL);
  const results = res.data.results as PopularMovies[];
  const data = results.map((mov) => ({
    ...mov,
    backdrop_path: `${IMG_URL}${mov.backdrop_path}`,
    poster_path: `${IMG_URL}${mov.poster_path}`,
  }));
  return data;
};

export const getUpcomingMovies = async () => {
  const res = await axios.get(UPCOMINGURL);
  const results = res.data.results as PopularMovies[];
  const data = results.map((mov) => ({
    ...mov,
    backdrop_path: `${IMG_URL}${mov.backdrop_path}`,
    poster_path: `${IMG_URL}${mov.poster_path}`,
  }));

  return data;

  // return data;
};

export const getSimilarMovies = async (movie_id: string) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
  );
  const results = res.data.results as PopularMovies[];
  const data = results.map((mov) => ({
    ...mov,
    backdrop_path: `${IMG_URL}${mov.backdrop_path}`,
    poster_path: `${IMG_URL}${mov.poster_path}`,
  }));

  console.log('similar movies', data);
  const dd = data.filter((movie, idx) => idx < 4);

  console.log('dill', dd);

  return dd as PopularMovies[];
};

// getPopularMovies();
