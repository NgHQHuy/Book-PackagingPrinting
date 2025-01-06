import React, { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
        <div></div>
        <div>{children}</div>
    </div>
  )
}
