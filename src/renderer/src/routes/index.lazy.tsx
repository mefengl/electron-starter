import type { AppRouter } from '@main/api'

import { createLazyFileRoute } from '@tanstack/react-router'
import { createTRPCReact } from '@trpc/react-query'

const trpcReact = createTRPCReact<AppRouter>()

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function HelloTRPC() {
  const { data: hello } = trpcReact.greeting.useQuery({ name: 'tRPC' })
  trpcReact.onGreeting.useSubscription(undefined, {
    onData: (hello) => {
      // eslint-disable-next-line no-console
      console.log(hello)
    },
  })

  if (!hello) {
    return null
  }

  return <div data-testid="greeting">{hello}</div>
}

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <HelloTRPC />
    </div>
  )
}
