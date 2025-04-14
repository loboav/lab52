import { Router } from 'express';
import * as productController from './product.controller.js';

const router = Router();

router.route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.route('/:productId')
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
