import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env.mjs";
import SendGrid from "~/server/services/sendgrid";

type RequestBody = {
  to: string;
  body: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { to } =
    req.method === "POST"
      ? (req.body as RequestBody)
      : (req.query as RequestBody);

  const msg = {
    to,
    from: env.SENDGRID_VERIFIED_SENDER,
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  SendGrid.send(msg)
    .then(() => {
      res.status(200).json({ success: true, msg });
    })
    .catch((error: Error) => {
      res.status(500).json({ error });
      throw new Error(error.message);
    });
}
