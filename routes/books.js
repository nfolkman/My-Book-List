const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, booksController.getBooks)

router.post('/addBook', booksController.addBook)

router.put('/changeStatus', booksController.changeStatus)

router.put('/changePage', booksController.changePage)

router.delete('/deleteBook', booksController.deleteBook)

module.exports = router