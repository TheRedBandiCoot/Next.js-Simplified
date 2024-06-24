import { unstable_noStore } from "next/cache";

export default function RandomNumber() {
  unstable_noStore();
  return <h3>{Math.random()}</h3>;
}
