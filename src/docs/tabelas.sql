CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    person_name VARCHAR(255),
    isbn VARCHAR(13) UNIQUE NOT NULL,
    status VARCHAR(20) CHECK (status IN ('disponível', 'alugado')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
INSERT INTO users (username, password) VALUES ('seu_usuario', '$2b$10$vECUTXMxgHcj3znqzQDlY.d31JtBh3Fhp/AEITMx7ozkPfphTiUmy');
