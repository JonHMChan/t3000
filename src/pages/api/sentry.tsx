import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  throw new Error("API throw error test");
  res.status(200).json({ name: "John Doe" });
}
