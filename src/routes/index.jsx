import React, { useLayoutEffect } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Home = React.lazy(() => import('../pages/Home'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const Loader = React.lazy(() => import('../components/Loader'));

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <Home />
              </React.Suspense>
            }
          />

          {/* Error page route */}
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loader />}>
                <NotFound />
              </React.Suspense>
            }
          />
        </Routes>
      </Wrapper>
    </Router>
  );
}
