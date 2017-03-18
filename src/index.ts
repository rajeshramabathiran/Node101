import * as http from "http";
import * as express from "express";
import app from "./app";

let port: number = 3000;

const server = http.createServer(app);
server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

function onError(error: NodeJS.ErrnoException) : void {
    throw error;
}

function onListening(): void {
    console.log('Listening on port ' + server.address().port);
}