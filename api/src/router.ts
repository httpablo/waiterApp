import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Router } from "express";
import multer from "multer";
import { listCategories } from "./app/useCases/categories/listCategories.js";
import { createCategory } from "./app/useCases/categories/createCategory.js";
import { listProducts } from "./app/useCases/products/listproducts.js";
import { createProduct } from "./app/useCases/products/createProduct.js";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, "..", "uploads"));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// List products
router.get("/products", listProducts);

// Create product
router.post("/products", upload.single("image"), createProduct);

// Get products by category
router.get("/categories/:categoryId/products", listProductsByCategory);

// List orders
router.get("/orders", (req, res) => {
    return res.send("OK");
});

// Create order
router.post("/orders", (req, res) => {
    return res.send("OK");
});

// Change order status
router.patch("/orders/:orderId", (req, res) => {
    return res.send("OK");
});

// Delete/Cancel order
router.delete("/orders/:orderId", (req, res) => {
    return res.send("OK");
});
