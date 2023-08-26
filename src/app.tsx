import { Suspense } from 'react'

import { Router } from '@router'

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  )
}
