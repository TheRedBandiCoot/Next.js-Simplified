import { Fragment } from "react";

export function Skeleton({
  short,
  inline,
}: {
  short?: boolean;
  inline?: boolean;
}) {
  return (
    <div
      className="skeleton"
      style={{
        width: short ? "15em" : undefined,
        display: inline ? "inline-block" : undefined,
      }}
    />
  );
}

export function SkeletonButton() {
  return <div className="skeleton skeleton-btn" />;
}

export function SkeletonInput() {
  return <div className="skeleton skeleton-input" />;
}

export function SkeletonList({
  amount,
  children,
}: {
  amount: number;
  children: React.ReactNode;
}) {
  return (
    <>
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  );
}

export function SkeletonPostCard() {
  return (
    <div className="card">
      <div className="card-header">
        <Skeleton short />
      </div>
      <div className="card-body">
        <div className="card-preview-text">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
      <div className="card-footer">
        <SkeletonButton />
      </div>
    </div>
  );
}
