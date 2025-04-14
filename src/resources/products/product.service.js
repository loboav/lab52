import Product from './product.model.js';

const products = [];

const getAllProducts = async () => products;

const getProductById = async (id) => products.find((product) => product.id === id);

const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  products.push(newProduct);
  return newProduct;
};

const updateProduct = async (id, productData) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) return null;
  products[productIndex] = { ...products[productIndex], ...productData };
  return products[productIndex];
};

const deleteProduct = async (id) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) return false;
  products.splice(productIndex, 1);
  return true;
};

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };