import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Book from '../models/book';

const createBook = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    });

    return book
        .save()
        .then((result) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getBookById = (req: Request, res: Response, next: NextFunction) => {
    Book.findById(req.params.id)
        .exec()
        .then((book) => {
            return res.status(200).json({
                book: book
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

/*
var getBook = function (req, res) {
    book_1.default.findById(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};


*/
const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    Book.find()
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books,
                count: books.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createBook, getAllBooks, getBookById };
