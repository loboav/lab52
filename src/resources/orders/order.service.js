import Order from './order.model.js';

const orders = [];

const getAllOrders = async () => orders;

const getOrderById = async (id) => orders.find((order) => order.id === id);

const createOrder = async (orderData) => {
  const newOrder = new Order(orderData);
  orders.push(newOrder);
  return newOrder;
};

const updateOrder = async (id, orderData) => {
  const orderIndex = orders.findIndex((order) => order.id === id);
  if (orderIndex === -1) return null;
  orders[orderIndex] = { ...orders[orderIndex], ...orderData };
  return orders[orderIndex];
};

const deleteOrder = async (id) => {
  const orderIndex = orders.findIndex((order) => order.id === id);
  if (orderIndex === -1) return false;
  orders.splice(orderIndex, 1);
  return true;
};

const getOrderProducts = async (id) => {
  // Заглушка для получения продуктов заказа
  return [];
};

export { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder, getOrderProducts };