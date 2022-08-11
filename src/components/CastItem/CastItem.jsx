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
            <img src="#" alt="sdfsdf" />
          )}
          <p>{cast.name}</p>
          <p>{cast.caracter}</p>
        </li>
      ))}
    </ul>
  );
}