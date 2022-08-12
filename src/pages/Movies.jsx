import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { getMoviesByQuery } from 'api/api';
import MovieListQuery from 'components/MovieListQuery/MovieListQuery';
import { Loader } from 'components/Loader/Loader';
import { DivLoader } from 'components/Loader/Loader.styled';
import { Container } from 'components/MainBar/MainBar.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get('searchWord');

  useEffect(() => {
    if (searchWord) {
      const fetchMovies = async () => {
        setIsLoading(true);
        try {
          const { data } = await getMoviesByQuery(searchWord);

          setMovies(data.results);
        } catch (error) {
        } finally {
          setIsLoading(false);
        }
      };
      fetchMovies();
    }
  }, [searchWord]);

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ searchWord: event.target.elements.searchWord.value });
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && (
        <DivLoader>
          <Loader />
        </DivLoader>
      )}
      <MovieListQuery movies={movies} />
    </Container>
  );
}
