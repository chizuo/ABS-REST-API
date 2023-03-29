// Package dependencies of server
const express = require('express');
const v1 = require('./routes/v1/api-gateway');

// Instance of server
const server = express();

server.use(express.json());
server.use('/v1', v1);

// Exporting for unit tests rather than running as a process and listening through the port.
module.exports = server;

if(require.main === module) {
   // Start server only if start via command land, ignores during unit testing.
   
    const port = process.env.PORT || 12312;
    server.listen((port), () => {
        console.log(`Service is listening at port:${port}`);
    });
}