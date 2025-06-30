import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import './index.css'

import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Pattern2 from './patterns/custom-queries'
import Pattern8 from './patterns/infinite-queries'
import Pattern5 from './patterns/pagination'
import Pattern4 from './patterns/parameterized-queries'
import { Patterns } from './patterns/Patterns'
import Pattern7 from './patterns/prefetching'
import Pattern3 from './patterns/selectors'
import Pattern1 from './patterns/simple-queries'

const rootRoute = createRootRoute({
  component: Outlet,
})

const indexRoute = createRoute({
  path: '/',
  component: Patterns,
  getParentRoute: () => rootRoute,
})

const pattern1 = createRoute({
  path: '/simple-queries',
  getParentRoute: () => rootRoute,
  component: Pattern1,
})

const pattern2 = createRoute({
  path: '/custom-queries',
  getParentRoute: () => rootRoute,
  component: Pattern2,
})

const pattern3 = createRoute({
  path: '/selectors',
  getParentRoute: () => rootRoute,
  component: Pattern3,
})

const pattern4 = createRoute({
  path: '/parameterized-queries',
  getParentRoute: () => rootRoute,
  component: Pattern4,
})

const pattern5 = createRoute({
  path: '/pagination',
  getParentRoute: () => rootRoute,
  component: Pattern5,
})

const pattern6 = createRoute({
  path: '/disabling-queries',
  getParentRoute: () => rootRoute,
  component: Pattern4,
})

const pattern7 = createRoute({
  path: '/prefetching',
  getParentRoute: () => rootRoute,
  component: Pattern7,
})

const pattern8 = createRoute({
  path: '/infinite-queries',
  getParentRoute: () => rootRoute,
  component: Pattern8,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  pattern1,
  pattern2,
  pattern3,
  pattern4,
  pattern5,
  pattern6,
  pattern7,
  pattern8,
])

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
)
