import IBook from '../interfaces/ibook';
import mongoose = require('mongoose');

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Successfully Connected!');
    }
});

export const BookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        extraInformation: { type: String }
    },
    {
        timestamps: true
    }
);

BookSchema.post<IBook>('save', function () {
    this.extraInformation = 'this was saved';
});

const Book = mongoose.model<IBook>('Book', BookSchema);
export default Book;
