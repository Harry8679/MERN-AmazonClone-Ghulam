import catchAsyncErrorsMiddleware from "../middlewares/catchAsyncErrors.middleware.js";
import Product from "../models/product.model.js";
import ErrorHandler from "../utils/errorHandler.util.js";

// Get All Products => /api/v1/products
export const getProducts = catchAsyncErrorsMiddleware(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    products,
  });
});

// Get All Products => /api/v1/products
export const newProducts = catchAsyncErrorsMiddleware(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    product,
  });
});

// Get Single product details => /api/v1/products:id
export const getProductDetails = catchAsyncErrorsMiddleware(async (req, res, next) => {
    const product = await Product.findById(req?.params?.id);
  
    if (!product) {
      return next(new ErrorHandler("Product not found.", 404));
    }
  
    res.status(200).json({
      product,
    });
  });

// Update product details => /api/v1/products/:id
export const updateProduct = catchAsyncErrorsMiddleware(async (req, res) => {
  let product = await Product.findById(req?.params?.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
    // return res.status(404).json({
    //   error: "Product not found.",
    // });
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    product,
  });
});

// Delete product => /api/v1/products/:id
export const deleteProduct = catchAsyncErrorsMiddleware(async (req, res) => {
  const product = await Product.findById(req?.params?.id);

  if (!product) {
    return next(new ErrorHandler("Product not found.", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    message: "Product Deleted",
  });
});
