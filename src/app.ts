import express, { Request, Response } from 'express';
import * as bookController from './controllers/bookController';
import * as bodyParser from 'body-parser';

const app = express();

app.set("port", 3000);

app.use(bodyParser.json());

app.get('/books', bookController.allBooks);

app.get('/books/:id', bookController.getBook);
app.put('/books', bookController.addBook);
app.delete('/books/:id', bookController.deleteBook);
app.post('/books/:id', bookController.updateBook);


const server = app.listen(app.get('port'), () => {
  console.log('App is running on http://localhost:%d', app.get('port'));
});