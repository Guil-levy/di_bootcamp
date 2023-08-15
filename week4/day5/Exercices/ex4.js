const allBooks=[{
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    image: 'https://example.com/book1.jpg',
    alreadyRead: true
},
{
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://example.com/book2.jpg',
    alreadyRead: false
}];

function renderBooks() {
    const listBooksDiv = document.querySelector('.listBooks');
    
    // Create a table element
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    
    // Iterate through each book and create a table row for it
    allBooks.forEach(book => {
        const row = document.createElement('tr');
       
        // Create a cell for the book's image
        const imageCell = document.createElement('td');
        const image = document.createElement('img');
        image.src = book.image;
        image.style.width = '100px';
        imageCell.appendChild(image);
        imageCell.style.border = '5px solid black';
        // Create a cell for the book's details
        const detailsCell = document.createElement('td');
        const details = document.createElement('p');
        details.textContent = `${book.title} written by ${book.author}`;
        if (book.alreadyRead) {
            details.style.color = 'red';
        }
        detailsCell.appendChild(details);
        
        // Append cells to the row and row to the table
        row.appendChild(imageCell);
        row.appendChild(detailsCell);
        table.appendChild(row);
    });
    
    // Append the table to the div
    listBooksDiv.appendChild(table);
}

// Call the function to render the books
renderBooks();