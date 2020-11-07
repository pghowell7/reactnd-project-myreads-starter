import React from 'react'
import './App.css'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class SearchBooks extends React.Component {
    state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       * onChange={(event) => this.updateQuery(event.target.value)}
       */
      query: '',
      searchedBooks: []
    }
  
    updateQuery = (query) => {
      this.setState({ query: query.trim() })
    
    }

    shelfChanged = (event) => {
      
      this.props.booksUpdateShelf(this.props.book,event.target.value)
      //.bind(this)
    }

    searchForBooks = (event) => {
      BooksAPI.search(event.target.value)
      .then((searchedBooks) => {
        this.setState(() => ({
          searchedBooks
        }))
      })
  
      if  (typeof(this.state.searchedBooks) === 'undefined') {
        this.setState({ searchedBooks: [] })
      }

      this.updateQuery(event.target.value)
  }

    /*searchForBooks = (event) => {
      BooksAPI.search(event.target.value)
      .then((searchedBooks) => {
        this.setState(() => ({
          searchedBooks
        }))
      })
    }*/
  
    clearQuery = () => {
      this.setState({ query: '' })
    }

    render() {

        /*const {searchForBooks} = this.props
        const { query } = this.state

        let searchedBooks 
        searchedBooks = searchForBooks(query)*/
        const {booksUpdateShelf} = this.props


      return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link 
          className="close-search"
          to="/"
          >
            BACK</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.searchForBooks}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {typeof(this.state.searchedBooks) !== 'undefined'  && this.state.searchedBooks && this.state.searchedBooks.length>1 ? (
                    <ol className="books-grid">
                        {this.state.searchedBooks.map((book, index) => (
                          <li key={index}>
                            <Book 
                              book = {book}
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