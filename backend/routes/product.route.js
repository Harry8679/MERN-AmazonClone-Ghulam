import express from "express";
import { getProducts, newProducts } from "../controllers/product.controller.js";
// const router = express.Router();
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/admin/products').post(newProducts);

export default router;
