import * as React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import SuspenseWithDelay from '../common/layout/SuspenseWithDelay/SuspenseWithDelay';

const Auth = React.lazy(() => import('./auth'));
const Register = React.lazy(() => import('./register'));

const Routers = () => (
  <Routes>
    <Route
      key="auth"
      path="auth/*"
      element={(
        <SuspenseWithDelay
          delay={300}
          fallback={<div>Loading Auth</div>}
        >
          <Auth />
        </SuspenseWithDelay>
        )}
    />
    <Route
      key="register"
      path="register/*"
      element={(
        <SuspenseWithDelay
          delay={300}
          fallback={<div>Loading Register</div>}
        >
          <Register />
        </SuspenseWithDelay>
        )}
    />
    <Route path="/*" element={<Navigate to="auth" />} />
  </Routes>
);

const External = () => (
  <main>
    <Routers />
  </main>
);

export default External;

/* @TODO Caso caia na rota default, será redirecionada para a rota welcome */
/* @TODO Caso não encontre a rota, será redirecionado para a rota welcome */
/* @TODO Caso não encontre nenhuma rota, será redirecionado para a rota auth */
