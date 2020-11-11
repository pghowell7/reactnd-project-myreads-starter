import React from 'react'
import './App.css'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.shelfChanged = this.shelfChanged.bind(this);
    this.state = {
    };

    
  }

    shelfChanged = (event) => {
      this.props.booksUpdateShelf(this.props.book,event.target.value)
    }
  
    render() {

    const {book, shelf} = this.props

    let currentShelf 

    if (shelf !== "undefined" && shelf) {
      currentShelf = shelf
    }
    else if (book.shelf !== "undefined" && book.shelf) {
      currentShelf = book.shelf
    } else {
      currentShelf ="none"

    }

    return  (        
        <div className="book">
          {book !=="undefined" ? (
            <div>
              <div className="book-top">
                {book.imageLinks && book.imageLinks !== "undefined" && book.imageLinks.thumbnail !== "undefined" && book.imageLinks.thumbnail.length>0 ? (
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
                ):(<div></div>)}
                <div className="book-shelf-changer">
                  <select
                    value={currentShelf}
                    onChange={this.shelfChanged}              
                  >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors && book.authors !== "undefined" ? (
                <div>
                  {book.authors.map((author, index) => (
                    <div key={index} className="book-authors">{author}</div>
                  ))}
                </div>
              ):(<div></div>)}            
            </div>
            ):(<div></div>)}
          </div>                 
        )
    }
}

export default Book        