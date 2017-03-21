import express from 'express';
import path from 'path';

let app = express();

app.set('views', path.join(__dirname, '../', 'views'));

app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, '../dist')));
console.log(path.join(__dirname, '../dist'));

app.get('*', (req, res) => {
  res.render('index');
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on ${server.address().port}`);
});

