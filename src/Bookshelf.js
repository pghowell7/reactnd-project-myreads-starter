import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
    state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      filteredBooks: []
    }
  
    /*booksOnShelf = (bookShelfName) => {
      this.setState((currentState) => ({
        filteredBooks: this.books.filter((b) => {
          return b.shelf === bookShelfName
        })
      }))
    }*/

    render() {

        const {books, bookshelfname,bookshelftitle,booksUpdateShelf} = this.props
        //const filteredBooks = this.booksOnShelf(bookshelfname)
        const filteredBooks = books.filter((b) => {
          return b.shelf === bookshelfname
        })

      return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelftitle}</h2>
                  <div className="bookshelf-books">
                  {filteredBooks && filteredBooks.length>1 ? (
                    <ol className="books-grid">
                        {filteredBooks.map((book, index) => (
                          <li key={index}>
                            <Book 
                              book = {book}
                              shelf = {book.shelf}
                              booksUpdateShelf={booksUpdateShelf}
                            />
                          </li>
                        ))}
                    </ol>
                  ):(
                    <div>
                      <p>NO BOOKS FOUNDS</p>
                    </div>
                  )}
                  </div>
                </div>         
        )
    }
}

export default BookShelf