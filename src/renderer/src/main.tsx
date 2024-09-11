import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a memory history instance to initialize the router so it doesn't break when compiled:
const memoryHistory = createMemoryHistory({
  initialEntries: ['/'],
})
// Create a new router instance
const router = createRouter({
  history: memoryHistory,
  routeTree,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
