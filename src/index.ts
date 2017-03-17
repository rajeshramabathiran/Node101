import * as http from "http";
import * as express from "express";

let app: express.Application = express();
let port: number = 3000;
app.set('port', port);

let router = express.Router();
router.get('/', (req, res, next) => {
    res.send('Hello');
})

app.use('/', router);

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