import express from "express";
import { getMusic } from "../Controller/rhcp.controller.js";

const router = express.Router();

router.get("/", getMusic);

 export default router;