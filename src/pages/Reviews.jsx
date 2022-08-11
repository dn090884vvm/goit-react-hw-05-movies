import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/api';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async movieId => {
      setIsLoading(true);
      try {
        const { data } = await getMovieReviews(movieId);
        // console.log(data.results);
        setReviews(data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}{' '}
      {reviews.length !== 0 ? (
        <ReviewsItem reviews={reviews} />
      ) : (
        <p>We do not have reviews for this movie</p>
      )}
    </div>
  );
}
