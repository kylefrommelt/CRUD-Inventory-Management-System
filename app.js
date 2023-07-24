// app.js

const InventoryItemDAO = require('./InventoryItemDAO');

// Example usage

const inventoryDAO = new InventoryItemDAO();

// Create an item
const newItem = {
  ID: 11,
  ItemName: 'Product K',
  Quantity: 3,
  Price: 14.99
};
inventoryDAO.create(newItem);

// Read an item
inventoryDAO.read(5);

// Update an item
const updatedItem = {
  ID: 2,
  ItemName: 'Updated Product B',
  Quantity: 10,
  Price: 19.99
};
inventoryDAO.update(updatedItem);

// Delete an item
inventoryDAO.delete(3);
