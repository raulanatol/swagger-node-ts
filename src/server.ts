import * as bodyParser from 'body-parser';
import * as express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//****** Definición de todas las rutas de la aplicación
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.use('/api', router);

//******

app.listen(port);
console.log(`Magic happens on port ${port}...`);
