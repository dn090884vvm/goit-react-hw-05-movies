import axios from 'axios';

const API_KEY = '06cf6ee022a0922eb5200ae030143d7b';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getTrendingMovies() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response;
}
