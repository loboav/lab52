import { v4 as uuidv4 } from 'uuid';

class Client {
  constructor({ id = uuidv4(), fullName, address, numberPhone, bonusCard } = {}) {
    this.id = id;
    this.fullName = fullName;
    this.address = address;
    this.numberPhone = numberPhone;
    this.bonusCard = bonusCard;
  }
}

export default Client;
