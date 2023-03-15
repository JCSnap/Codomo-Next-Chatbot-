// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryAPI";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;
  console.log("reached api");
  if (!prompt) {
    res.status(400).json({ answer: "No prompt provided" });
  } else if (prompt === "test") {
    res.status(200).json({ answer: "test received" });
  }
  console.log("querying");
  const response = await query(prompt);

  const message = {
    text: response || "Unable to get response from ChatGPT",
  };

  res.status(200).json({ answer: message.text });
}
