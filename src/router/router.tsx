import { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { routes } from './routes'

const HomePage = lazy(() =>
  import('@pages').then((module) => ({ default: module.HomePage })),
)

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <HomePage />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
