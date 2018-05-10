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
  })
  .get(((req, res) => {
    console.log('Buscando por todas las películas');
    res.json({ message: 'Aquí las tienes []' });
  }));

router.route('/movies/:movie_uuid')
  .get(((req, res) => {
    console.log('Buscando por la película con id', req.params.movie_uuid);
    res.json({ message: 'Aquí tienes tu película' });
  }));

app.use('/api', router);
//******

app.listen(port);
console.log(`Magic happens on port ${port}...`);
