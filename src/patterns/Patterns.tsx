import { Link } from '@tanstack/react-router'

export function Patterns() {
  return (
    <>
      React Query Patterns
      <Link to={'/simple-queries'}>
        <li>simple-queries</li>
      </Link>
      <Link to={'/custom-queries'}>
        <li>custom-queries</li>
      </Link>
      <Link to={'/selectors'}>
        <li>selectors</li>
      </Link>
      <Link to={'/parameterized-queries'}>
        <li>parameterized-queries</li>
      </Link>
    </>
  )
}
