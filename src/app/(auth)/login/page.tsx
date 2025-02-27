import Link from 'next/link'

import { Home } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'

import { CardWrapper } from '@/components/card-wrapper'
import { LoginForm } from '@/components/login-form'

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center gap-4">
      <h1 className="w-fit bg-primary p-0.5 text-2xl font-bold text-zinc-50">
        BHOOMI
      </h1>
      <CardWrapper
        title="Welcome Back"
        description="Enter your email below to login to your account"
        footer={
          <div className="w-full text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        }
      >
        <LoginForm />
      </CardWrapper>
      <Link
        href="/"
        className={buttonVariants({
          variant: 'outline',
          className: 'absolute left-3 top-3 md:left-10 md:top-10',
        })}
      >
        <Home />
        Home
      </Link>
    </section>
  )
}
