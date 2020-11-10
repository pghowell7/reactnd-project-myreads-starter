import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookLists from './BookLists'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
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
