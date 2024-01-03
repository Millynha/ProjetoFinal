let books = [];
const apiUrl = 'http://localhost:3000/api/books';

function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${book.title}</b> - ${book.author} - ${book.person_name} - ${book.isbn} - ${book.status}
                        <button onclick="editBook(${index})">Editar</button>
                        <button onclick="deleteBook(${index})">Excluir</button>`;
        bookList.appendChild(li);
    });
}

async function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const personName = document.getElementById('personName').value;
    const isbn = document.getElementById('isbn').value;
    const status = document.getElementById('status').value;

    if (title && author) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, author, personName, isbn, status }),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar livro: ' + await response.text());
            }

            const newBook = await response.json();
            books.push(newBook);
            displayBooks();
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
            alert('Erro ao cadastrar livro. Por favor, tente novamente.');
        }
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

async function fetchAndDisplayBooks() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Erro ao buscar livros: ${response.status} - ${response.statusText}`);
        }

        books = await response.json();
        displayBooks();
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        alert('Erro ao buscar livros. Por favor, tente novamente.');
    }
}



async function editBook(index) {
    const newTitle = prompt('Novo título:', books[index].title);
    const newAuthor = prompt('Novo autor:', books[index].author);
    const newPersonName = prompt('Novo nome:', books[index].person_name);
    const newIsbn = prompt('Novo ISBN:', books[index].isbn);
    const newStatus = prompt('Nova situação (disponível ou alugado):', books[index].status);

    // Validar se os campos estão preenchidos
    if (newTitle !== null && newAuthor !== null && newPersonName !== null && newIsbn !== null && newStatus !== null) {
        try {
            const response = await fetch(`${apiUrl}/${books[index].id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: newTitle,
                    author: newAuthor,
                    personName: newPersonName,
                    isbn: newIsbn,
                    status: newStatus,
                }),
            });

            const updatedBook = await response.json();
            books[index] = updatedBook;
            displayBooks();
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
            alert('Erro ao atualizar livro. Por favor, tente novamente.');
        }
    }
}
async function deleteBook(index) {
    const confirmDelete = confirm('Deseja realmente excluir este livro?');

    if (confirmDelete) {
        try {
            await fetch(`${apiUrl}/${books[index].id}`, {
                method: 'DELETE',
            });

            books.splice(index, 1);
            displayBooks();
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
            alert('Erro ao excluir livro. Por favor, tente novamente.');
        }
    }
}

async function searchBooks() {
    const searchTerm = prompt('Digite o termo de pesquisa:');
    
    if (searchTerm !== null) {
        try {
            const response = await fetch(`${apiUrl}/search/${searchTerm}`);
            
            if (!response.ok) {
                throw new Error(`Erro ao buscar livros: ${response.status} - ${response.statusText}`);
            }
            
            books = await response.json();
            displayBooks();
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
            alert('Erro ao buscar livros. Por favor, tente novamente.');
        }
    }
}


fetchAndDisplayBooks();