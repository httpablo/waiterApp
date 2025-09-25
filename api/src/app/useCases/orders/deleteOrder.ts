import type { Request, Response } from "express";
import { Order } from "./../../models/Order.js";

export async function deleteOrders(req: Request, res: Response) {
    try {
        const { orderId } = req.params;

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        await Order.findByIdAndDelete(orderId);

        return res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
