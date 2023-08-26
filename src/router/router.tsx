import { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { routes } from './routes'

const HomePage = lazy(() =>
  import('@pages').then((module) => ({ default: module.HomePage })),
)

const MultiStepFormPage = lazy(() =>
  import('@pages').then((module) => ({ default: module.MultiStepFormPage })),
)

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <HomePage />,
  },
  {
    path: routes.MULTI_STEP_FORM,
    element: <MultiStepFormPage />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
