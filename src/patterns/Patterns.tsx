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
      <Link to={'/pagination'}>
        <li>pagination</li>
      </Link>
      <Link to={'/disabling-queries'}>
        <li>disabling-queries</li>
      </Link>
      <Link to={'/prefetching'}>
        <li>prefetching</li>
      </Link>
      <Link to={'/infinite-queries'}>
        <li>infinite-queries</li>
      </Link>
      <Link to={'/simple-mutations'}>
        <li>simple-mutations</li>
      </Link>
      <Link to={'/automatic-query-invalidation'}>
        <li>automatic-query-invalidation</li>
      </Link>
    </>
  )
}
