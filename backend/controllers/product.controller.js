import Product from "../models/product.model.js";

// Get All Products => /api/v1/products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    products,
  });
};

// Get All Products => /api/v1/products
export const newProducts = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
};

// Get Single product details => /api/v1/products:id
export const getProductDetails = async (req, res) => {
  const product = await Product.findById(req?.params?.id);

  if (!product) {
    return res.status(404).json({
      error: "Product not found.",
    });
  }

  res.status(200).json({
    product,
  });
};
