import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";
import { RegisterRoutes} from "./routes/routes";
import * as path from "path";
import * as swaggerUI from "swagger-ui-express";

const swaggerJSON = require('./swagger/swagger.json');

let app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
RegisterRoutes(app);

app.use('/swagger.json', express.static(__dirname + '/swagger/swagger.json'));

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

export default app;