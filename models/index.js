const mysql = require('mysql2/promise');
const dbConfig = {} // Use readWrite config for main DB

// Create a connection pool
const pool = mysql.createPool({
    host: dbConfig.host || 'localhost',
    user: dbConfig.username || 'root',
    password: dbConfig.password || '',
    database: dbConfig.database || 'INSTA',
    port: dbConfig.port || 3306,
    waitForConnections: true,
    connectionLimit: 10, // Adjust according to your need
    queueLimit: 0
});

const connectToDatabase = async () => {
    return pool.getConnection(); // Get a connection from the pool
};

module.exports = { connectToDatabase };
