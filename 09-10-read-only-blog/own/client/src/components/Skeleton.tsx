import { Fragment } from "react"

type SkeletonType = Partial<{ short: boolean; inline: boolean }>
export function Skeleton({ short, inline }: SkeletonType) {
  return (
    <div
      className="skeleton"
      style={{
        width: short ? "15em" : undefined,
        display: inline ? "inline-block" : undefined
      }}
    />
  )
}

export function SkeletonButton() {
  return <div className="skeleton skeleton-btn" />
}

export function SkeletonInput() {
  return <div className="skeleton skeleton-input" />
}

export function SkeletonList({
  amount,
  children
}: {
  amount: number
  children: React.ReactNode
}) {
  return (
    <>
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  )
}
// export function SimpleSkeletonText({ resolve, children }) {
//   return (
//     <Suspense fallback={<Skeleton short inline />}>
//       <Await resolve={resolve}>{children}</Await>
//     </Suspense>
//   )
// }