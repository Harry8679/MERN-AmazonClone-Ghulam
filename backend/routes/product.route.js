import express from "express";
import {
  deleteProduct,
  getProductDetails,
  getProducts,
  newProducts,
  updateProduct,
} from "../controllers/product.controller.js";
// const router = express.Router();
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProducts);
router.route("/products/:id").get(getProductDetails);
router.route("/admin/products/:id").patch(updateProduct);
router.route("/admin/products/:id").delete(deleteProduct);

export default router;
