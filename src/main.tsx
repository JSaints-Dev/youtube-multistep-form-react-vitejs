import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/app'

ReactDOM.createRoot(document.querySelector('[data-root="root"]')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
