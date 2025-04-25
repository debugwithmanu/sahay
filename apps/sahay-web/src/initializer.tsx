import { StrictMode } from 'react';

/** React Query */
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/react-query';

/** React Router */
import { RouterProvider } from 'react-router';
import { router } from '@/router';

/** SDKs */
import { fetcher } from '@repo/api-sdk';

/** Styles */
import '@/styles/index.css';

/** Configure SDKs */
fetcher.setBaseUrl('');

export default function Initializer() {
  return (
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>
  );
}
