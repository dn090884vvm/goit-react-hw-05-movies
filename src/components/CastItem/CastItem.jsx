import image from '../../Images/movieNotFound.jpg';
import propTypes from 'prop-types';

export default function CastItem({ casts }) {
  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
              alt={cast.name}
            />
          ) : (
            <img src={image} alt={cast.name} />
          )}
          <p>{cast.name}</p>
          <p>{cast.caracter}</p>
        </li>
      ))}
    </ul>
  );
}

CastItem.propTypes = {
  casts: propTypes.arrayOf(propTypes.object).isRequired,
};
