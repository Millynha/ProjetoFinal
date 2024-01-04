// userModel.js
const bcrypt = require('bcrypt');
const pool = require('../database/db');

const getUserByUsernameAndPassword = async (username, password) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        const user = result.rows[0];

        if (user) {
            if (!user.password) {
                throw new Error('Usuário não tem senha.');
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                return user;
            } else {
                return null;
            }
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro durante a comparação de senhas:', error);
        throw error;
    }
};

module.exports = {
    getUserByUsernameAndPassword,
};
