import propTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="searchWord" />

      <button type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
