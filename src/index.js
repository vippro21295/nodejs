import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

app.use(express.static('./src'));

//http logger
app.use(morgan("combined"));

//template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});