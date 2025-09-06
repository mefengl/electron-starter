import { q } from '@renderer/lib/orpc'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(
      q.greeting.queryOptions({ input: { name: 'oRPC' } }),
    ),
})

function HelloORPC() {
  const { data: hello } = useQuery(q.greeting.queryOptions({ input: { name: 'oRPC' } }))

  // live subscription (logs latest message)
  const { data: live } = useQuery(q.onGreeting.experimental_liveOptions({ retry: true }))

  if (!hello)
    return null
  return (
    <div>
      <div data-testid="greeting">{hello}</div>
      {live && <div data-testid="greeting-live">{live}</div>}
    </div>
  )
}

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <HelloORPC />
    </div>
  )
}
