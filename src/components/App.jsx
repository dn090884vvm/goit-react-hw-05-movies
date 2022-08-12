import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
import MainBar from './MainBar/MainBar';

// import MoviesDetailedPage from 'pages/MoviesDetailedPage';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetailedPage = lazy(() => import('../pages/MoviesDetailedPage'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainBar />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetailedPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
