import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";
import { RegisterRoutes} from "./routes/routes";
import * as path from "path";

let app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
RegisterRoutes(app);

let router = express.Router();
router.get('/', (req, res, next) => {
    res.send('Welcome to Node 101 tutorial! Navigate to /docs for API usage.');
})

app.use('/', router);

app.use('/swagger.json', express.static(__dirname + '/swagger/swagger.json'));
app.use('/docs', express.static(__dirname + '/swagger-ui'));

export default app;