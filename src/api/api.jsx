import axios from 'axios';

const API_KEY = '06cf6ee022a0922eb5200ae030143d7b';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getTrendingMovies() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response;
}

export async function getMovieById(id) {
  const { data } = await axios.get(`/3/movie/${id}?api_key=${API_KEY}`);
  return { data };
}

export async function getMovieCredits(id) {
  const { data } = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}`);
  return { data };
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}`);
  return { data };
}

export async function getMoviesByQuery(searchQuery) {
  const { data } = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false`
  );
  return { data };
}
