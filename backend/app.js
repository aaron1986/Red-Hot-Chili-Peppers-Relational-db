import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rhcpRouter from "./View/rhcp.view.js"; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/music", rhcpRouter); 

export default app;
