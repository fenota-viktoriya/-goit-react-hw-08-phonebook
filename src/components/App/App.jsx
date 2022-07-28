import { Container } from '@mui/material';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authOperation } from 'redux/auth';
import { BarMenu } from '../AppBar/BarMenu';
const HomePage = lazy(() =>
  import('../../pages/HomePage').then(module => ({ default: module.HomePage }))
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage').then(module => ({
    default: module.ContactsPage,
  }))
);
const LoginPage = lazy(() =>
  import('../../pages/LoginPage').then(module => ({
    default: module.LoginPage,
  }))
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage').then(module => ({
    default: module.RegisterPage,
  }))
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<BarMenu />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};
