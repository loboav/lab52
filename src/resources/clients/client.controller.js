import * as clientService from './client.service.js';

const getAllClients = async (req, res) => {
  const clients = await clientService.getAllClients();
  res.json(clients);
};

const getClientById = async (req, res) => {
  const { clientId } = req.params;
  const client = await clientService.getClientById(clientId);
  if (!client) {
    return res.status(404).send({ message: 'Client not found' });
  }
  res.json(client);
};

const createClient = async (req, res) => {
  const clientData = req.body;
  const newClient = await clientService.createClient(clientData);
  res.status(201).json(newClient);
};

const updateClient = async (req, res) => {
  const { clientId } = req.params;
  const clientData = req.body;
  const updatedClient = await clientService.updateClient(clientId, clientData);
  if (!updatedClient) {
    return res.status(404).send({ message: 'Client not found' });
  }
  res.json(updatedClient);
};

const deleteClient = async (req, res) => {
  const { clientId } = req.params;
  const isDeleted = await clientService.deleteClient(clientId);
  if (!isDeleted) {
    return res.status(404).send({ message: 'Client not found' });
  }
  res.status(204).send();
};

const getClientOrders = async (req, res) => {
  const { clientId } = req.params;
  const orders = await clientService.getClientOrders(clientId);
  if (!orders) {
    return res.status(404).send({ message: 'Client or orders not found' });
  }
  res.json(orders);
};

export { getAllClients, getClientById, createClient, updateClient, deleteClient, getClientOrders };
