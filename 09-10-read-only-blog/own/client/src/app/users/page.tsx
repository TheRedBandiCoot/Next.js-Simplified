import { getUsers } from "@/api/users"
import { Suspense } from "react"
import { Skeleton, SkeletonButton, SkeletonList } from "@/components/Skeleton"
import Link from "next/link"

export default function UserList() {
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={6}>
              <div className="card">
                <div className="card-header">
                  <Skeleton />
                </div>
                <div className="card-body">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
                <div className="card-footer">
                  <SkeletonButton />
                </div>
              </div>
            </SkeletonList>
          }
        >
          <GetAllUsers />
        </Suspense>
      </div>
    </>
  )
}

export type User = {
  id: string
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

async function GetAllUsers() {
  const users: User[] = await getUsers()
  return (
    <>
      {users.map(user => (
        <div key={user.id} className="card">
          <div className="card-header">{user.name}</div>
          <div className="card-body">
            <div>{user.company.name}</div>
            <div>{user.website}</div>
            <div>{user.email}</div>
          </div>
          <div className="card-footer">
            <Link className="btn" href={`users/${user.id.toString()}`}>
              View
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
