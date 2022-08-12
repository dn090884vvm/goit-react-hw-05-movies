import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { DivLoader } from 'components/Loader/Loader.styled';
import { Container } from 'components/MainBar/MainBar.styled';

import { getMovieById } from 'api/api';
import {
  BackButton,
  StyledLink,
  AdditionalInfo,
  Info,
} from './MoviesDetailedPage.styled';
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
        // console.log(data);
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
      <Container>
        <section>
          <BackButton
            to={backLinkHref}
          >{`<-- Back to the Previous page`}</BackButton>
          {isLoading && (
            <DivLoader>
              <Loader />
            </DivLoader>
          )}
          {movie && <MovieCard movie={movie} />}
        </section>
        <section>
          <AdditionalInfo>
            <Info>Additional Info</Info>
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
          </AdditionalInfo>
        </section>
        <Outlet />
      </Container>
    </main>
  );
}
