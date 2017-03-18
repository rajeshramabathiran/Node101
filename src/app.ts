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
    res.send('Hello World');
})

app.use('/', router);

app.use('/swagger', (req, res) => {
    res.sendFile(__dirname + '/swagger/swagger.json');
});

export default app;