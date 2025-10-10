import express from "express";
import http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { router } from "./router.js";

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const port = 3001;

        app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "*");
            res.setHeader("Access-Control-Allow-Headers", "*");

            next();
        });
        app.use(
            "/uploads",
            express.static(path.resolve(__dirname, "..", "uploads"))
        );
        app.use(express.json());
        app.use(router);

        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
