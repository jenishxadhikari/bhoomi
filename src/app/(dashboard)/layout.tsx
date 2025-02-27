import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { AppSidebar } from '@/components/app-sidebar'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex w-full flex-col">
        <div className="flex h-16 items-center">
          <SidebarTrigger className="h-12 w-12" />
        </div>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}
