import type { AppRouter } from '@main/api'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createHashHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { createTRPCReact } from '@trpc/react-query'
import log from 'electron-log/renderer'
import { ipcLink } from 'electron-trpc/renderer'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import './globals.css'

log.info('Log from the renderer process')

// Create a hash history instance to initialize the router so it doesn't break when compiled:
const hashHistory = createHashHistory()
// Create a new router instance
const router = createRouter({
  history: hashHistory,
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
    // eslint-disable-next-line react/no-context-provider
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
