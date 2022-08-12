import { getTrendingMovies } from 'api/api';
import { useState, useEffect } from 'react';
import { StyledLink } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
import { DivLoader } from 'components/Loader/Loader.styled';
import { Container } from 'components/MainBar/MainBar.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await getTrendingMovies();

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
      <Container>
        {isLoading && (
          <DivLoader>
            <Loader />
          </DivLoader>
        )}
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
