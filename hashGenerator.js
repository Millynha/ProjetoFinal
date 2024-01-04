//Criar senha hash para cadastrar no banco de dados
const bcrypt = require('bcrypt');

const senha = 'sua_senha';
const saltRounds = 10;

bcrypt.hash(senha, saltRounds, (err, hash) => {
    if (err) {
        console.error('Erro ao gerar hash:', err);
    } else {
        console.log('Senha hash:', hash);
    }
});