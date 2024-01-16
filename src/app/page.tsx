import { Comp } from './comp'
import { CompClient } from './comp.client'

export const runtime = 'edge'

export default function Home() {
  return (
    <main>
      <h1>
        This is a <code>{'<Page>'}</code>
      </h1>
      <Comp />
      <CompClient/>
    </main>
  )
}
