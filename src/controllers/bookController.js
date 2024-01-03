// controllers/bookController.js
const bookModel = require('../models/bookModel');

const getBooks = async (req, res) => {
  try {
    const books = await bookModel.getAllBooks();
    res.json(books);
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const createBook = async (req, res) => {
  const bookData = req.body;
  try {
    const newBook = await bookModel.createBook(bookData);
    res.json(newBook);
  } catch (error) {
    console.error('Erro ao cadastrar livro:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;
  try {
    const updatedBook = await bookModel.updateBook(bookId, bookData);
    res.json(updatedBook);
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    await bookModel.deleteBook(bookId);
    res.send('Livro excluído com sucesso');
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

const searchBooks = async (req, res) => {
  const query = req.params.query;
  try {
    const result = await bookModel.searchBooks(query);
    res.json(result);
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
};
