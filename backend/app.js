import express from "express";
import cors from "cors";
import rhcpRouter from "./View/rhcp.view.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ],
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).send({ status: "ok" });
});

app.use("/api/albums", rhcpRouter);

export default app;
