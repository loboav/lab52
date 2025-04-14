import { Router } from 'express';
import * as clientController from './client.controller.js';

const router = Router();

router.route('/')
  .get(clientController.getAllClients)
  .post(clientController.createClient);

router.route('/:clientId')
  .get(clientController.getClientById)
  .put(clientController.updateClient)
  .delete(clientController.deleteClient);

router.route('/:clientId/order')
  .get(clientController.getClientOrders);

export default router;
