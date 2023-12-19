CREATE TABLE livros (
  id SERIAL PRIMARY KEY,
  nome_aluguel VARCHAR(255),
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  isbn VARCHAR(20) NOT NULL,
  situacao VARCHAR(20) CHECK (situacao IN ('disponivel', 'alugado')) NOT NULL
);


CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);
