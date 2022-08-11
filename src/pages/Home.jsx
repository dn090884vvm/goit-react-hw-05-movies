import { getTrendingMovies } from 'api/api';
import { useState, useEffect } from 'react';
import { StyledLink } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await getTrendingMovies();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <main>
      {isLoading && <div>...Loading</div>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
