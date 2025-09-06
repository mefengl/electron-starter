import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createHashHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import log from 'electron-log/renderer'
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import './globals.css'

log.info('Log from the renderer process')

// Create a hash history instance to initialize the router so it doesn't break when compiled:
const hashHistory = createHashHistory()

// Shared QueryClient (also passed to Router context for loaders)
const queryClient = new QueryClient()

// Create a new router instance
const router = createRouter({
  context: { queryClient },
  defaultPreload: 'intent',
  history: hashHistory,
  routeTree,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
