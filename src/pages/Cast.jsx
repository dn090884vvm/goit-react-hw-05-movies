import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieCredits } from 'api/api';
import CastItem from 'components/CastItem/CastItem';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async movieId => {
      setIsLoading(true);
      try {
        const { data } = await getMovieCredits(movieId);
        setCasts(data.cast);
        console.log(data.cast);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <div>Loading </div>}
      {casts.length !== 0 ? <CastItem casts={casts} /> : <p>No found</p>}
    </div>
  );
}
