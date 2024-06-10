import { NextApiRequest, NextApiResponse } from "next";
import db from "@/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return;
  const title = req.body.title;
  const data = await db.todo.create({
    data: { title, completed: false, userId: 1 },
  });

  res.revalidate("/todos");

  return res.status(200).json(data);
}
