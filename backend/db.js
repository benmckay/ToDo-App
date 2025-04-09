/**
 * Database connection module using PostgreSQL.
 * 
 * This module sets up a connection pool to a PostgreSQL database using the `pg` library.
 * It retrieves database connection parameters from environment variables, with fallback
 * default values for development purposes.
 * 
 * Configuration:
 * - `DB_USER`: The username for the database (default: "postgres").
 * - `DB_HOST`: The host of the database (default: "localhost").
 * - `DB_NAME`: The name of the database (default: "todo_app").
 * - `DB_PASSWORD`: The password for the database (default: "Karanja8").
 * - `DB_PORT`: The port number for the database (default: 5432).
 * 
 * The module also tests the connection upon initialization and logs the connection status.
 * 
 * @module db
 * @requires pg
 * 
 * @example
 * const pool = require('./db');
 * 
 * pool.query('SELECT * FROM tasks', (err, res) => {
 *   if (err) {
 *     console.error('Error executing query', err.stack);
 *   } else {
 *     console.log('Query result:', res.rows);
 *   }
 * });
 */
const { Pool } = require('pg');

// Create a connection pool
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'todo_db',
  password: process.env.DB_PASSWORD || 'Karanja8',
  port: process.env.DB_PORT || 5432,
});

// Test the connection
pool.connect((err) => {
  if (err) {
    console.error('❌ Database connection error:', err.stack);
  } else {
    console.log('✅ Connected to the PostgreSQL database');
  }
});

module.exports = pool;