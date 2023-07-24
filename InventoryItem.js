// InventoryItem.js

class InventoryItem {
    constructor(id, name, quantity, price) {
      this._id = id;
      this._name = name;
      this._quantity = quantity;
      this._price = price;
    }

    get id() {
      return this._id;
    }
  
    set id(newId) {
      this._id = newId;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    get quantity() {
      return this._quantity;
    }
  
    set quantity(newQuantity) {
      this._quantity = newQuantity;
    }
  
    get price() {
      return this._price;
    }
  
    set price(newPrice) {
      this._price = newPrice;
    }
}
  