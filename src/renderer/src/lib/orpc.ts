import type { router as appRouter } from '@main/api'
import type { RouterClient } from '@orpc/server'

import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/message-port'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'

const { port1: clientPort, port2: serverPort } = new MessageChannel()

// forward port to main via preload
window.postMessage('start-orpc-client', '*', [serverPort])

const link = new RPCLink({ port: clientPort })
clientPort.start()

export const orpc: RouterClient<typeof appRouter> = createORPCClient(link)

// TanStack Query utils
export const q = createTanstackQueryUtils(orpc)
