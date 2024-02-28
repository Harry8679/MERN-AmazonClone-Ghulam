import Product from '../models/product.model.js';

// Get All Products => /api/v1/products
export const getProducts = async (req, res) => {
    res.status(200).json({
        message: 'All products'
    });
}

// Get All Products => /api/v1/products
export const newProducts = async (req, res) => {
    const product = await Product.create(req.body);
    
    res.status(200).json({
        product
    });
}