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
import Pattern4 from './patterns/parameterized-queries'
import { Patterns } from './patterns/Patterns'
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
  path: '/parallel-queries',
  getParentRoute: () => rootRoute,
  component: Pattern4,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  pattern1,
  pattern2,
  pattern3,
  pattern4,
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
