import Client from './client.model.js';

const clients = [];

const getAllClients = async () => clients;

const getClientById = async (id) => clients.find((client) => client.id === id);

const createClient = async (clientData) => {
  const newClient = new Client(clientData);
  clients.push(newClient);
  return newClient;
};

const updateClient = async (id, clientData) => {
  const clientIndex = clients.findIndex((client) => client.id === id);
  if (clientIndex === -1) return null;
  clients[clientIndex] = { ...clients[clientIndex], ...clientData };
  return clients[clientIndex];
};

const deleteClient = async (id) => {
  const clientIndex = clients.findIndex((client) => client.id === id);
  if (clientIndex === -1) return false;
  clients.splice(clientIndex, 1);
  return true;
};

const getClientOrders = async (id) => {
  // Заглушка для получения заказов клиента
  return [];
};

export { getAllClients, getClientById, createClient, updateClient, deleteClient, getClientOrders };