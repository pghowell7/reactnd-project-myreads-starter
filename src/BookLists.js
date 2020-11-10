import React from 'react'
import './App.css'
import BookShelf from './Bookshelf'
import  { Link } from 'react-router-dom'

class BookLists extends React.Component {
    state = {

    }

    render() {

        const {books,booksUpdateShelf} = this.props

      return (   
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              books={books}
              bookshelfname="currentlyReading"
              bookshelftitle="Currently Reading"
              booksUpdateShelf={booksUpdateShelf}
            />
             <BookShelf 
              books={books}
              bookshelfname="wantToRead"
              bookshelftitle="Want To Read"
              booksUpdateShelf={booksUpdateShelf}
            />
             <BookShelf 
              books={books}
              bookshelfname="read"
              bookshelftitle="Read"                  
              booksUpdateShelf={booksUpdateShelf}
            />
            </div>
        </div>
        <div className="open-search">
          <Link
            className="open-search"
            to="/search"
          >
          Add A Book</Link>  
          
        </div>
      </div>          
        )
    }
}

export default BookLists        