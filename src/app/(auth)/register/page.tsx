import Link from 'next/link'

import { Home, LogIn } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'

import { CardWrapper } from '@/components/card-wrapper'
import { RegisterForm } from '@/components/register-form'

export default function LoginPage() {
  return (
    <section className="flex flex-col items-center gap-4">
      <h1 className="w-fit bg-primary p-0.5 text-2xl font-bold text-zinc-50">
        BHOOMI
      </h1>
      <CardWrapper
        title="Create an account"
        description="Enter your email below to create your account"
        footer={
          <div className="w-full text-center text-sm">
            By clicking continue, you agree to our
            <br />
            <Link href="#" className="underline underline-offset-4">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </div>
        }
      >
        <RegisterForm />
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
      <Link
        href="/login"
        className={buttonVariants({
          variant: 'outline',
          className: 'absolute right-3 top-3 md:right-10 md:top-10',
        })}
      >
        <LogIn />
        Login
      </Link>
    </section>
  )
}
