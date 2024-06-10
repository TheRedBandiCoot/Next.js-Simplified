import { NextApiRequest, NextApiResponse } from "next";

export default function postIdHander(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query;
  return res.status(200).json(postId);
}
