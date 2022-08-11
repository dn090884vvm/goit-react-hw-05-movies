import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { getMovieById } from 'api/api';
import { BackButton, StyledLink } from './MoviesDetailedPage.styled';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MoviesDetailedPage() {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovies = async movieId => {
      setIsLoading(true);
      try {
        const { data } = await getMovieById(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        error('Page is not found');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies(movieId);
  }, [movieId]);

  return (
    <main>
      <section>
        <BackButton to={backLinkHref}>Turn Back</BackButton>
        {isLoading && <div>Loading......</div>}
        {movie && <MovieCard movie={movie} />}
      </section>
      <section>
        <StyledLink
          to={`/movies/${movieId}/cast`}
          state={{ from: location?.state?.from }}
        >
          | Cast |
        </StyledLink>

        <StyledLink
          to={`/movies/${movieId}/reviews`}
          state={{ from: location?.state?.from }}
        >
          | Reviews |
        </StyledLink>
      </section>
      <Outlet />
    </main>
  );
}
