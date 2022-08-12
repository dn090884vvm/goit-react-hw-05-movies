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
