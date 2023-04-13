// Package dependencies of server
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Instance of server
const server = express();

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '50mb', extended: true }));
server.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization'] }));
server.use('/', routes);

// Exporting for unit tests rather than running as a process and listening through the port.
module.exports = server;

if (require.main === module) {
    // Start server only if start via command land, ignores during unit testing.

    const port = process.env.PORT || 12312;
    server.listen((port), () => {
        console.log(`Service is listening at port:${port}`);
    });
}