import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="[&:nth-child(3):p-4] grid grid-rows-[auto_1fr]">
      {children}
    </div>
  )
}
