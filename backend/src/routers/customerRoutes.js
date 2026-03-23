import express from "express";
import {createCustomer, getCustomers} from "../controllers/customerController.js";

import { protect } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", protect, createCustomer);
router.get("/", protect, getCustomers);

export default router;
