import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import { Movies } from 'pages/Movies';
import MainBar from './MainBar/MainBar';
import MoviesDetailedPage from 'pages/MoviesDetailedPage';
import Cast from 'pages/Cast';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainBar />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetailedPage />}>
            <Route path="cast" element={<Cast />} />
            {/* <Route path="reviews" element={<Reviews />} />  */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
