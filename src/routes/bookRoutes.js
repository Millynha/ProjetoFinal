// models/bookModel.js
const pool = require('../database/db');

const getAllBooks = async () => {
  const result = await pool.query('SELECT * FROM books');
  return result.rows;
};

const createBook = async (book) => {
  const { title, author, personName, isbn, status } = book;
  const result = await pool.query(
    'INSERT INTO books (title, author, person_name, isbn, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, author, personName, isbn, status]
  );
  return result.rows[0];
};

const updateBook = async (id, bookData) => {
  const { title, author } = bookData;
  const result = await pool.query('UPDATE books SET title = $1, author = $2 WHERE id = $3 RETURNING *', [title, author, id]);
  return result.rows[0];
};

const deleteBook = async (id) => {
  await pool.query('DELETE FROM books WHERE id = $1', [id]);
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
