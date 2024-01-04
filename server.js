const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./src/routes/bookRoutes');
const authRoutes = require('./src/routes/authRoutes');
const pool = require('./src/database/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes); // Rotas de autenticação

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});