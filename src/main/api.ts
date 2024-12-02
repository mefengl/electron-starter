import { initTRPC } from '@trpc/server'
import { observable } from '@trpc/server/observable'
import { EventEmitter } from 'node:events'
import z from 'zod'

const ee = new EventEmitter()

const t = initTRPC.create({
  isServer: true,
})

// Uncomment below eslint comments to temporarily turn off object sorting
// /* eslint-disable perfectionist/sort-objects */
export const router = t.router({
  greeting: t.procedure.input(z.object({ name: z.string() })).query((req) => {
    const { input } = req

    ee.emit('greeting', `Greeted ${input.name}`)
    return `Hello ${input.name}` as const
  }),
  onGreeting: t.procedure.subscription(() => {
    return observable((emit) => {
      function onGreet(hello: string) {
        emit.next(hello)
      }

      ee.on('greeting', onGreet)

      return () => {
        ee.off('greeting', onGreet)
      }
    })
  }),
})
// /* eslint-enable perfectionist/sort-objects */

export type AppRouter = typeof router
