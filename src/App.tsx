import { RouterProvider } from '@tanstack/router';
import { router } from './routes/__root';

export function App() {
  return <RouterProvider router={router} />;
}
