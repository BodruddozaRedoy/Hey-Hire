import React from 'react'
import DashboardProvider from './provider'

export default function DashboardLayout({ children }: any) {
  return (
    <div>
      <DashboardProvider>
        {children}
      </DashboardProvider>
    </div>
  )
}
