import { Outlet } from 'react-router';
import ErrorBoundary from './ErrorBoundary';

export default function ErrorBoundaryLayout() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}
