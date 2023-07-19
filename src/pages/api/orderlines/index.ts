// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/utils/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const { orderId, menuId, status } = req.body;
    const isValid = orderId && menuId && status;
    if (!isValid) return res.status(400).send("Bad request");
    await prisma.orderlines.updateMany({
      data: {
        orderStatus: status,
      },
      where: { orderId: Number(orderId), menuId: Number(menuId) },
    });
    return res.send(200);
  }
  res.status(405).send("Method not allowed");
}
