// app.js

const InventoryItemDAO = require('./InventoryItemDAO');

const inventoryDAO = new InventoryItemDAO();

const newItem = {
  ID: 11,
  ItemName: 'Product K',
  Quantity: 3,
  Price: 14.99
};
inventoryDAO.create(newItem);

inventoryDAO.read(5);

const updatedItem = {
  ID: 2,
  ItemName: 'Updated Product B',
  Quantity: 10,
  Price: 19.99
};
inventoryDAO.update(updatedItem);

inventoryDAO.delete(3);
