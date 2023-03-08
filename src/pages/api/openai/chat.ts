import type { NextApiRequest, NextApiResponse } from "next";
import openai from "~/server/services/openai";
import { prompts } from "~/server/services/openai/prompts";

type RequestBody = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { message } =
    req.method === "POST"
      ? (req.body as RequestBody)
      : (req.query as RequestBody);

  const response = await openai.createChatCompletion(prompts.CHAT(message));

  if (response.data) {
    res.status(200).json({ data: response.data });
  } else {
    res.status(500).json({ error: response });
  }
}
