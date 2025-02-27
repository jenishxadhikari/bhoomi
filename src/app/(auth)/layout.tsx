import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </main>
  )
}
