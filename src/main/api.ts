import { eventIterator, EventPublisher, os } from '@orpc/server'
import { z } from 'zod'

const publisher = new EventPublisher<Record<'greeting', string>>()

// /* eslint-disable perfectionist/sort-objects */
export const router = {
  greeting: os
    .input(z.object({ name: z.string() }))
    .handler(({ input }) => {
      const message = `Hello ${input.name}` as const
      publisher.publish('greeting', `Greeted ${input.name}`)
      return message
    }),

  // stream
  onGreeting: os.output(eventIterator(z.string())).handler(async function* ({ signal }) {
    for await (const msg of publisher.subscribe('greeting', { signal })) {
      yield msg
    }
  }),
}
// /* eslint-enable perfectionist/sort-objects */

export type AppRouter = typeof router
