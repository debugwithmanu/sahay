import { createBrowserRouter, Navigate } from 'react-router';
import ErrorBoundaryLayout from '@/components/ErrorBoundaryLayout/index';
import Home from '@/pages/Home';

export const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);
