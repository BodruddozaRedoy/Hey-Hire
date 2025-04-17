"use client"
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Plus, SidebarOpenIcon } from "lucide-react"
import {SidebarOptions} from '@/services/Constants';
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
    const path = usePathname()
    
    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className="text-3xl font-bold text-center mt-5 text-primary">HeyHire</h1>
                <Button className="w-full"><Plus />Create New Interview</Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarContent>
                        <SidebarMenu>
                            {SidebarOptions?.map((option:any, i:number) => (
                                <SidebarMenuItem key={i} className="p-1">
                                    <SidebarMenuButton asChild className={`p-5 ${path === option.path && 'bg-primary text-white font-semibold'}`}>
                                        <Link href={option.path}>
                                        <option.icon/>
                                        <span className="text-[16px]">{option.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
