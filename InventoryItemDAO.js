// InventoryItemDAO.js

// Import the mssql library to interact with the SQL Server
const sql = require('mssql');

// Configuration for the database connection
const config = {
  user: 'root',
  password: 'password',
  server: 'localhost',
  database: 'InventoryDatabase',
  options: {
    trustServerCertificate: true,
    maxIdleTime: null,
  },
};

// Class representing the InventoryItem Data Access Object (DAO)
class InventoryItemDAO {
  constructor() {
    // Create a connection pool using the provided configuration
    this.pool = new sql.ConnectionPool(config);

    // Connect to the database using the connection pool
    this.pool.connect((err) => {
      if (err) throw err;
      console.log('Connected to the database');
    });
  }

  // Method to create a new inventory item
  async create(item) {
    try {
      const { ID, ItemName, Quantity, Price } = item;

      // Validate ID as a positive integer
      if (!Number.isInteger(ID) || ID <= 0) {
        throw new Error('ID must be a positive integer');
      }

      // Validate ItemName and Price as non-empty values
      if (!ItemName || !Price) {
        throw new Error('ItemName and Price are required');
      }

      // SQL query to insert the new item into the INVENTORY table
      const query =
        'INSERT INTO INVENTORY (ID, ItemName, Quantity, Price) VALUES (@ID, @ItemName, @Quantity, @Price)';
      const request = this.pool.request();

      // Use parameterized queries to prevent SQL injection
      request.input('ID', sql.Int, ID);
      request.input('ItemName', sql.VarChar(255), ItemName);
      request.input('Quantity', sql.Int, Quantity);
      request.input('Price', sql.Decimal(10, 2), Price);

      // Execute the query
      const result = await request.query(query);
      console.log('Item created successfully');
    } catch (err) {
      console.error('Error creating item:', err.message);
      throw err;
    }
  }

  // Method to read an inventory item by ID
  async read(id) {
    try {
      // Validate ID as a positive integer
      if (!Number.isInteger(id) || id <= 0) {
        throw new Error('ID must be a positive integer');
      }

      // SQL query to select an item from the INVENTORY table by ID
      const query = 'SELECT * FROM INVENTORY WHERE ID = @ID';
      const request = this.pool.request();

      // Use parameterized queries to prevent SQL injection
      request.input('ID', sql.Int, id);

      // Execute the query
      const result = await request.query(query);
      if (result.recordset.length > 0) {
        const item = result.recordset[0];
        console.log(item);
      } else {
        console.log('Item not found');
      }
    } catch (err) {
      console.error('Error reading item:', err.message);
      throw err;
    }
  }

  // Method to update an inventory item
  async update(item) {
    try {
      const { ID, ItemName, Quantity, Price } = item;

      // Validate ID as a positive integer
      if (!Number.isInteger(ID) || ID <= 0) {
        throw new Error('ID must be a positive integer');
      }

      // Validate ItemName and Price as non-empty values
      if (!ItemName || !Price) {
        throw new Error('ItemName and Price are required');
      }

      // SQL query to update the item in the INVENTORY table
      const query =
        'UPDATE INVENTORY SET ItemName = @ItemName, Quantity = @Quantity, Price = @Price WHERE ID = @ID';
      const request = this.pool.request();

      // Use parameterized queries to prevent SQL injection
      request.input('ID', sql.Int, ID);
      request.input('ItemName', sql.VarChar(255), ItemName);
      request.input('Quantity', sql.Int, Quantity);
      request.input('Price', sql.Decimal(10, 2), Price);

      // Execute the query
      const result = await request.query(query);
      console.log('Item updated successfully');
    } catch (err) {
      console.error('Error updating item:', err.message);
      throw err;
    }
  }

  // Method to delete an inventory item by ID
  async delete(id) {
    try {
      // Validate ID as a positive integer
      if (!Number.isInteger(id) || id <= 0) {
        throw new Error('ID must be a positive integer');
      }

      // SQL query to delete the item from the INVENTORY table by ID
      const query = 'DELETE FROM INVENTORY WHERE ID = @ID';
      const request = this.pool.request();

      // Use parameterized queries to prevent SQL injection
      request.input('ID', sql.Int, id);

      // Execute the query
      const result = await request.query(query);
      console.log('Item deleted successfully');
    } catch (err) {
      console.error('Error deleting item:', err.message);
      throw err;
    }
  }
}

// Export the InventoryItemDAO class
module.exports = InventoryItemDAO;