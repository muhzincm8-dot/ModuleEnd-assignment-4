import express from "express";
import {createCase, updateCase} from "../controllers/caseController.js";

import { protect } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", protect, createCase);
router.patch("/:id", protect, updateCase);

export default router;
