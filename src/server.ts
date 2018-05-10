import * as bodyParser from 'body-parser';
import * as express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//****** Definición de todas las rutas de la aplicación
const router = express.Router();

router.use((req, res, next) => {
  console.log('¡Algo está pasando por aquí!');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

router.route('/movies')
  .post((req, res) => {
    console.log('Creación de una nueva película', req.body.name);
    res.json({ message: '¡Película creada!' });
  });

app.use('/api', router);
//******

app.listen(port);
console.log(`Magic happens on port ${port}...`);
