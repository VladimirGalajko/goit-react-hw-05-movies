
import Layout from 'Layout';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';


const MoviesListPage = lazy(() => import('./pages/MoviesListPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const ActorsPage = lazy(() => import('./pages/ActorsPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));


const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading component...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MoviesListPage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<ActorsPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
