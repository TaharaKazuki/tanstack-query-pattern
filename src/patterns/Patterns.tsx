import { Link } from '@tanstack/react-router'

export function Patterns() {
  return (
    <>
      React Query Patterns
      <Link to={'/simple-queries'}>
        <li>simple-queries</li>
      </Link>
    </>
  )
}
