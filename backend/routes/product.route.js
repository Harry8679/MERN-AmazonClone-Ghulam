import express from "express";
import { getProductDetails, getProducts, newProducts } from "../controllers/product.controller.js";
// const router = express.Router();
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/admin/products').post(newProducts);
router.route('/products/:id').get(getProductDetails);

export default router;
