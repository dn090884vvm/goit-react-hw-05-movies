import propTypes from 'prop-types';
import { Review } from './Reviews.styled';

export default function ReviewsItem({ reviews }) {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <Review>{`Author: ${review.author}`}</Review>
          <Review>{review.content}</Review>
        </li>
      ))}
    </ul>
  );
}

ReviewsItem.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};
