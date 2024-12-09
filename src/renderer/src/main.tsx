import type { AppRouter } from '@main/api'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { createTRPCReact } from '@trpc/react-query'
import log from 'electron-log/renderer'
import { ipcLink } from 'electron-trpc/renderer'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

log.info('Log from the renderer process')

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

const trpcReact = createTRPCReact<AppRouter>()

function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpcReact.createClient({
      links: [ipcLink()],
    }),
  )
  return (
    <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </trpcReact.Provider>
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
