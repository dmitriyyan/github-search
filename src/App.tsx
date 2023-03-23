import { Routes, Route } from 'react-router-dom';

import FavouritesPage from '@pages/FavouritesPage';
import HomePage from '@pages/HomePage';
import Navigation from '@components/Navigation';

export default function App() {
  return (
    <div className="h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}
