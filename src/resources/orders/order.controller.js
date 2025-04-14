import * as orderService from './order.service.js';

const getAllOrders = async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.json(orders);
};

const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  const order = await orderService.getOrderById(orderId);
  if (!order) {
    return res.status(404).send({ message: 'Order not found' });
  }
  res.json(order);
};

const createOrder = async (req, res) => {
  const orderData = req.body;
  const newOrder = await orderService.createOrder(orderData);
  res.status(201).json(newOrder);
};

const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const orderData = req.body;
  const updatedOrder = await orderService.updateOrder(orderId, orderData);
  if (!updatedOrder) {
    return res.status(404).send({ message: 'Order not found' });
  }
  res.json(updatedOrder);
};

const deleteOrder = async (req, res) => {
  const { orderId } = req.params;
  const isDeleted = await orderService.deleteOrder(orderId);
  if (!isDeleted) {
    return res.status(404).send({ message: 'Order not found' });
  }
  res.status(204).send();
};

const getOrderProducts = async (req, res) => {
  const { orderId } = req.params;
  const products = await orderService.getOrderProducts(orderId);
  if (!products) {
    return res.status(404).send({ message: 'Order or products not found' });
  }
  res.json(products);
};

export { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder, getOrderProducts };
