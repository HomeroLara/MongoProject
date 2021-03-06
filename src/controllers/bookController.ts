import {Request, Response } from 'express';
import Book from '../book';


export let allBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        if(err){
            res.send(err);
        }else{
            res.send(books);      
        }
    })
}


export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if(err){
            res.send(err);
        }else{
            res.send(book);
        }
    })
}

export let addBook = (req: Request, res: Response) => {
    let book = new Book(req.body);
    book.save((err: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send(book);
        }
    })
}

export let deleteBook = (req: Request, res: Response) => {
  let book = Book.deleteOne({ _id: req.params.id }).then(function (
    err: any,
    result: any
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send('Successfully Updated book.');
    }
  });
};

export let updateBook = (req: Request, res: Response) => {
  Book.findByIdAndUpdate(req.params.id, req.body).then(function (
    err: any,
    book: any
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send('Successfully Updated book.');
    }
  });
};

