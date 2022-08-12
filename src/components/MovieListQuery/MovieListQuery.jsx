import propTypes from 'prop-types';
import { StyledMovieList } from './MovieListQuery.styled';
import { useLocation } from 'react-router-dom';

export default function MovieListQuery({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <StyledMovieList
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </StyledMovieList>
          </li>
        );
      })}
    </ul>
  );
}

MovieListQuery.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};
