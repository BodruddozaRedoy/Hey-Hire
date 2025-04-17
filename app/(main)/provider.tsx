import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import {AppSidebar} from './_components/AppSidebar'

export default function DashboardProvider({ children }: any) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger/>
                {children}
            </SidebarProvider>
        </div>
    )
}
