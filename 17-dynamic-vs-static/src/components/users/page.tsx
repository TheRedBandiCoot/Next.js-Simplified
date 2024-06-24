import { getUsers } from "@/api/users";
import { Skeleton, SkeletonButton, SkeletonList } from "@/components/Skeleton";
import Link from "next/link";
import { Suspense } from "react";

export default async function user() {
  return (
    <Suspense
      fallback={
        <>
          <h1 className="page-title">Users</h1>
          <div className="card-grid">
            <SkeletonList amount={6}>
              <div className="card">
                <div className="card-header">
                  <Skeleton />
                </div>
                <div className="card-body">
                  <Skeleton short />
                  <Skeleton short />
                  <Skeleton short />
                </div>
                <div className="card-footer">
                  <SkeletonButton />
                </div>
              </div>
            </SkeletonList>
          </div>
        </>
      }
    >
      <Users />
    </Suspense>
  );
}

async function Users() {
  const users = await getUsers();
  return users.map((user) => (
    <div key={user.id} className="card">
      <div className="card-header">{user.name}</div>
      <div className="card-body">
        <div>{user.company.name}</div>
        <div>{user.website}</div>
        <div>{user.email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" href={`/users/${user.id.toString()}`}>
          View
        </Link>
      </div>
    </div>
  ));
}
