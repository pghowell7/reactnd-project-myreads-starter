import React from 'react'
import './App.css'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.shelfChanged = this.shelfChanged.bind(this);
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       * 
       *                 
        <li
            key={index}
            className={
            message.username === users[senderUser].username ? 'message sender' : 'message recipient'
        }
            >
            <p>{`${message.username}: ${message.text}`}</p>
        </li>
        "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"

        {`currentlyReading`==book.shelf ? 'selected' : ''}

        this.setState({ currentShelf: event.target.value })

           {
      console.log("inshelfChanged")
      this.booksUpdateShelf(this.book,event.target.value)
    }

        this.currentShelf = book.shelf
    const { currentShelf } = this.state

    onChange={this.shelfChanged}

    this.booksUpdateShelf(this.book,event.target.value)
    onClick={booksUpdateShelf(book,this.currentShelf)}
    this.setState({ currentShelf: event.target.value })
       * 
       */
      //currentShelf: ''
    };

    
  }

    shelfChanged = (event) => {
      
      this.props.booksUpdateShelf(this.props.book,event.target.value)
      //.bind(this)
    }
  
    render() {

    const {book,booksUpdateShelf} = this.props

    let currentShelf 

    if (book.shelf) {
      currentShelf = book.shelf
    } else {
      currentShelf ="none"

    }


      return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
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
      <div className="book-authors">{book.authors}</div>
      </div>          
        )
    }
}

export default Book        