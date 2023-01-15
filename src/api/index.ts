import axios from 'axios';

interface PopularMovies {
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

// getPopularMovies();
