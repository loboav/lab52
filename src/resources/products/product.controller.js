import * as productService from './product.service.js';

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

const getProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await productService.getProductById(productId);
  if (!product) {
    return res.status(404).send({ message: 'Product not found' });
  }
  res.json(product);
};

const createProduct = async (req, res) => {
  const productData = req.body;
  const newProduct = await productService.createProduct(productData);
  res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const productData = req.body;
  const updatedProduct = await productService.updateProduct(productId, productData);
  if (!updatedProduct) {
    return res.status(404).send({ message: 'Product not found' });
  }
  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const isDeleted = await productService.deleteProduct(productId);
  if (!isDeleted) {
    return res.status(404).send({ message: 'Product not found' });
  }
  res.status(204).send();
};

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
