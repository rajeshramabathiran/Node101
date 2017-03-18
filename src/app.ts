import * as express from "express";

let app: express.Application = express();

let router = express.Router();
router.get('/', (req, res, next) => {
    res.send('Hello World');
})

app.use('/', router);

export default app;