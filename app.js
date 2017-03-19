"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./dist/app");
require("./dist/controllers/booksController");
let port = process.env.PORT ? process.env.PORT : 3000;
const server = http.createServer(app_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function onError(error) {
    throw error;
}
function onListening() {
    console.log('Listening on port ' + server.address().port);
}