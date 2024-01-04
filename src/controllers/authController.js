// authController.js
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.getUserByUsernameAndPassword(username, password);

        if (user) {
            res.status(200).json({
                success: true,
                message: 'Login bem-sucedido!',
                user: {
                    // Inclua os dados do usuário que você deseja enviar para o cliente aqui
                    username: user.username,
                    // ... outros dados do usuário ...
                },
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Credenciais inválidas.',
            });
        }
    } catch (error) {
        console.error('Erro durante o login:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor.',
            error: error.message, // Adiciona a mensagem de erro específica.
        });
    }
};

module.exports = {
    loginUser,
};
