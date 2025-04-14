import { v4 as uuidv4 } from 'uuid';

class Product {
  constructor({ id = uuidv4(), name, price, age, issueTime } = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.age = age;
    this.issueTime = issueTime;
  }
}

export default Product;
