const express = require('express')
const Route = express.Router()

const BookController = require('../controllers/controllers')
const BorrowController = require('../controllers/borrow');

Route
  .get('/cek', BookController.getIndex)
  .get('/', BookController.getBooks)
  .get('/lah/:bookid', BookController.getBorrows)
  .get('/name/:name', BookController.nameBook)
  .get('/:bookid', BookController.bookId)
  .get('/category/:category', BookController.bookCategory)
  .get('/location/:location', BookController.bookLocation)
  .post('/', BookController.postBook)
  .patch('/:bookid', BookController.patchBook)
  .delete('/:bookid', BookController.bookDelete)

	.post('/borrow/', BorrowController.postBorrow)
	.patch('/borrow/:bookid', BorrowController.patchBorrow)

module.exports = Route
