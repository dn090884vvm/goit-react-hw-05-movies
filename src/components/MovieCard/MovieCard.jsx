export default function MovieCard({ movie }) {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.vote_average}</p>
        <p>{movie.overview}</p>
        <div>
          {movie.genres &&
            movie.genres.map(({ id, name }) => <div key={id}>{name}</div>)}
        </div>
      </div>
    </div>
  );
}
