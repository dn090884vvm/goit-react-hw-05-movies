import propTypes from 'prop-types';
import image from '../../Images/movieNotFound.jpg';

import {
  DivWrapper,
  ImageWrapper,
  MovieHeader,
  Details,
  GenresWrapper,
  Genres,
} from './MovieCard.styled';

export default function MovieCard({ movie }) {
  return (
    <DivWrapper>
      <ImageWrapper>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img src={image} alt={movie.title} />
        )}
      </ImageWrapper>
      <div>
        <MovieHeader>{movie.title}</MovieHeader>
        <Details>{`User score:   ${movie.vote_average} %`}</Details>
        <Details>{`Overview:  ${movie.overview}`}</Details>
        <GenresWrapper>
          Genres:
          {movie.genres &&
            movie.genres.map(({ id, name }) => (
              <Genres key={id}>{name}</Genres>
            ))}
        </GenresWrapper>
      </div>
    </DivWrapper>
  );
}

MovieCard.propTypes = {
  movie: propTypes.object.isRequired,
};
