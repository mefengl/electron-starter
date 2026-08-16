import { MemoryPublisher } from '@orpc/publisher/memory'
import { eventIterator, os } from '@orpc/server'
import { z } from 'zod'

const GreetingEvent = z.object({ message: z.string() })

const publisher = new MemoryPublisher<{
  greeting: z.infer<typeof GreetingEvent>
}>({
  resume: { enabled: true },
})

// /* eslint-disable perfectionist/sort-objects */
export const router = {
  greeting: os
    .input(z.object({ name: z.string() }))
    .handler(async ({ input }) => {
      const message = `Hello ${input.name}` as const
      await publisher.publish('greeting', { message: `Greeted ${input.name}` })
      return message
    }),

  // stream
  onGreeting: os.output(eventIterator(GreetingEvent)).handler(async function* ({ lastEventId, signal }) {
    yield* publisher.subscribe('greeting', { lastEventId, signal })
  }),
}
// /* eslint-enable perfectionist/sort-objects */

export type AppRouter = typeof router
