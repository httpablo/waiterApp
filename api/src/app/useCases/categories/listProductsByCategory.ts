import type { Request, Response } from "express";
import { Product } from "../../models/Product.js";

export async function listProductsByCategory(req: Request, res: Response) {
    try {
        const products = await Product.find()
            .where("category")
            .equals(req.params.categoryId);

        return res.status(200).json(products);
    } catch (error) {
        console.error("Error listing products:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
