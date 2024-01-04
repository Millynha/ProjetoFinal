// routes/bookRoutes.js
const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.getBooks);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.get('/search/:query', bookController.searchBooks);

module.exports = router;
