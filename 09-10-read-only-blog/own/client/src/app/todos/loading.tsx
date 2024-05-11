import { Skeleton, SkeletonList } from "@/components/Skeleton"

export default function loading() {
  return (
    <SkeletonList amount={10}>
      <li>
        <Skeleton short inline />
      </li>
    </SkeletonList>
  )
}
