const addFormBooks = document.querySelector('.add_form_books')
const bookList = document.querySelector('.book_list')

const books = JSON.parse(localStorage.getItem('books')) || []

addFormBooks.addEventListener('submit', addBook)

function addBook(e) {
    e.preventDefault()
    const titleBook = e.target.book_title.value
    const author = e.target.author.value
    const priority = e.target.priority.value
    const categories = e.target.categories.value

    const book = {
        titleBook: titleBook,
        author: author,
        priority: priority,
        categories: categories
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    showBooks(books, bookList)
    this.reset() //clear inp
    console.log(books)
}

function showBooks(arr, list) {
    list.innerHTML = arr.map((item, i) => {
        return `
                <li>
                   ${i + 1},
                   <b>Book title:</b> ${item.titleBook},
                   <b>Book author:</b> ${item.author},
                   <b>Priority:</b> ${item.priority}, 
                   <b>Categories:</b> ${item.categories},
                </li>
                `
    }).join('')
}

showBooks(books, bookList)
