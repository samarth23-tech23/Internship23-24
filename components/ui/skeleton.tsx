import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
<<<<<<< HEAD
      className={cn("animate-pulse rounded-md bg-muted", className)}
=======
      className={cn("animate-pulse rounded-md bg-primary/5", className)}
>>>>>>> 43056b8e07bfcb34767d69e862d8bf009c781f4e
      {...props}
    />
  )
}

export { Skeleton }
