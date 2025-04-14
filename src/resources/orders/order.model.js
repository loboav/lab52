import { v4 as uuidv4 } from 'uuid';

class Order {
  constructor({ id = uuidv4(), orderNumber, numbers, clientId, productsId } = {}) {
    this.id = id;
    this.orderNumber = orderNumber;
    this.numbers = numbers;
    this.clientId = clientId;
    this.productsId = productsId;
  }
}

export default Order;
