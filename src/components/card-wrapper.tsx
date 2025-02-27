import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface CardWrapperProps {
  title: string
  description: string
  children: React.ReactNode
  footer: React.ReactElement
}

export function CardWrapper({
  title,
  description,
  children,
  footer,
}: CardWrapperProps) {
  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="text-pretty text-center">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
