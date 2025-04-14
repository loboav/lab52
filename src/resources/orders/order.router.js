import { Router } from 'express';
import * as orderController from './order.controller.js';

const router = Router();

router.route('/')
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

router.route('/:orderId')
  .get(orderController.getOrderById)
  .put(orderController.updateOrder)
  .delete(orderController.deleteOrder);

router.route('/:orderId/products')
  .get(orderController.getOrderProducts);

export default router;
