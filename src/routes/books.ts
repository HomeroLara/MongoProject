import express from 'express';
import controller from '../controllers/bookController';

const router = express.Router();

router.post('/', controller.createBook);
router.get('/', controller.getAllBooks);
router.get('/:id', controller.getBookById);

export = router;
