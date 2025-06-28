import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Patterns } from './patterns/Patterns'

import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router'
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

const routeTree = rootRoute.addChildren([indexRoute, pattern1])

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
