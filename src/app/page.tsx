import { Comp } from './comp'

export const runtime = 'edge'

export default function Home() {
  return (
    <main>
      <h1>
        This is a <code>{'<Page>'}</code>
      </h1>
      <Comp />
    </main>
  )
}
