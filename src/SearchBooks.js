import React from 'react'
import './App.css'
import Book from './Book.js'
import { Link } from 'react-router-dom'

class SearchBooks extends React.Component {
    state = {
      query: '',
      searchedBooks: []
    }

  /*
    NOTES: The search from BooksAPI is limited to a particular set of search terms.
    You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms.

  */
  
    updateQuery = (query) => {
      this.setState({ query: query })
    
    }

     findBook(booklist, book) {
      return booklist.find((element) => {
        return element.id === book.id;
      })
    }

    getShelf = (booklist, book) => {
      const foundBook = this.findBook(booklist,book)

      if (foundBook && foundBook !== "undefined") {
        return foundBook.shelf
      } else {
        return ""
      }
    }

    searchForBooks = (event) => {
      this.props.searchForBooks(event.target.value)
    }
  
    clearQuery = () => {
      this.setState({ query: '' })
    }

    render() {

        const {books,searchQuery,searchForBooks,searchedBooks,booksUpdateShelf} = this.props
        let searchedQuery 
        searchedQuery = searchQuery
        if (searchedQuery && searchedQuery !== "undefined") {

        } else {
          searchedQuery=""
        }

        return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link 
            className="close-search"
            to="/"
          >
            BACK</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={searchedQuery}
              onChange={this.searchForBooks}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {typeof(searchedBooks) !== 'undefined'  && searchedBooks && searchedBooks.length>1 ? (
                    <ol className="books-grid">
                        {searchedBooks.map((book, index) => (
                          <li key={index}>
                            <Book 
                              book = {book}
                              shelf = {this.getShelf(books,book)}
                              booksUpdateShelf={booksUpdateShelf}
                            />
                            </li>
                        ))}
                    </ol>
                  ):(
                    <div>
                      <p>NO BOOKS FOUND</p>
                    </div>
                  )}
          </ol>
        </div>
      </div>        
        )
    }
}

export default SearchBooks