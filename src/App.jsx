import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './context/UserContext';
import SplashPage from './pages/SplashPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import CatSelectPage from './pages/CatSelectPage';
import CatNamingPage from './pages/CatNamingPage';
import MainPage from './pages/MainPage';

function App() {
  const { isOnboarded, username, selectedCatId } = useUser();

  return (
    <Routes>
      <Route
        path="/"
        element={isOnboarded ? <Navigate to="/main" replace /> : <SplashPage />}
      />
      <Route
        path="/register"
        element={isOnboarded ? <Navigate to="/main" replace /> : <RegisterPage />}
      />
      <Route
        path="/welcome"
        element={
          isOnboarded ? <Navigate to="/main" replace /> :
          !username ? <Navigate to="/" replace /> :
          <WelcomePage />
        }
      />
      <Route
        path="/select-cat"
        element={
          isOnboarded ? <Navigate to="/main" replace /> :
          !username ? <Navigate to="/" replace /> :
          <CatSelectPage />
        }
      />
      <Route
        path="/name-cat"
        element={
          isOnboarded ? <Navigate to="/main" replace /> :
          !selectedCatId ? <Navigate to="/" replace /> :
          <CatNamingPage />
        }
      />
      <Route
        path="/main"
        element={isOnboarded ? <MainPage /> : <Navigate to="/" replace />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
