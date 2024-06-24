import { Skeleton, SkeletonList } from "@/components/Skeleton";
import React from "react";

export default function todosLoading() {
  return (
    <SkeletonList amount={10}>
      <li>
        <Skeleton short inline />
      </li>
    </SkeletonList>
  );
}
