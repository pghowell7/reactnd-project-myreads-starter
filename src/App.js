import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookLists from './BookLists'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     * booksOnShelf={this.filterBooksOnShelf}
     */
    showSearchPage: false,
    books: [],
    book: {},
    searchQuery: "",
    searchedBooks: []
  }

 

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  booksOnShelf = (bookShelfName) => {
    this.setState((currentState) => ({
      filteredBooks: currentState.books.filter((b) => {
        return b.shelf === bookShelfName
      })
    }))
  }

  searchForBooks = (searchedQuery) => {
    BooksAPI.search(searchedQuery)
    .then((searchedBooks) => {
      this.setState(() => ({
        searchedBooks
      }))
    })

    if  (typeof(this.state.searchedBooks) === 'undefined') {
      this.setState({ searchedBooks: [] })
    }

    this.updateQuery(searchedQuery)


  }  


  updateQuery = (query) => {
    this.setState({ searchQuery: query })
  
  }

  /*searchForBooks = (query) => {
    if (this.query) {
      BooksAPI.search(this.query)
    .then((searchedBooks) => {
      this.setState(() => ({
        searchedBooks
      }))
    })
    } 
    else {
      this.searchedBooks = []
    }
  }*/

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelfBook = (book, shelf) => {
    BooksAPI.update(book,shelf).then(
      
    )
    this.getAllBooks()
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks 
            books={this.state.books}   
            searchQuery={this.state.searchQuery}
            searchForBooks={this.searchForBooks}
            searchedBooks={this.state.searchedBooks}
            booksUpdateShelf={this.updateShelfBook}
        />
        )} />
        <Route exact path='/' render={() => (
          <BookLists 
            books={this.state.books}            
            booksUpdateShelf={this.updateShelfBook}
            searchQuery={this.searchQuery}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
