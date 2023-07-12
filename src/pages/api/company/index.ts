// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "POST") {
    const { name } = req.body;
    const isValid = name;
    if (!isValid) return res.status(400).send("Bad request");
    await prisma.company.create({ data: { name } });
    return res.send(200);
  }
  res.status(405).send("Method not allowed");
}
