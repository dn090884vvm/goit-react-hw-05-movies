import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import { Movies } from 'pages/Movies';
import MainBar from './MainBar/MainBar';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainBar />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
