import type { AppRouter } from '@main/api'

import { createLazyFileRoute } from '@tanstack/react-router'
import { createTRPCReact } from '@trpc/react-query'

const trpcReact = createTRPCReact<AppRouter>()

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <HelloTRPC />
    </div>
  )
}

function HelloTRPC() {
  const { data } = trpcReact.greeting.useQuery({ name: 'tRPC' })
  trpcReact.subscription.useSubscription(undefined, {
    onData: (data) => {
      // eslint-disable-next-line no-console
      console.log(data)
    },
  })

  if (!data) {
    return null
  }

  return <div data-testid="greeting">{data.text}</div>
}
