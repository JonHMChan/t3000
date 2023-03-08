import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import twilio from "~/server/services/twilio";

type RequestBody = {
  to: string;
  body: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { to, body } =
    req.method === "POST"
      ? (req.body as RequestBody)
      : (req.query as RequestBody);

  twilio.messages
    .create({
      body,
      to,
      from: env.TWILIO_PHONE_NUMBER,
    })
    .then((message) => {
      res.status(200).json({ message });
    })
    .catch((error: Error) => {
      res.status(500).json({ error });
      throw new Error(error.message);
    });
}
