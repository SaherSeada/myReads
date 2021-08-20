import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {this.props.books && this.props.books.map(book => <Book changeShelf = {this.props.changeShelf} key ={book.id} {...book} />)}                      
                  </ol>
                </div>
            </div>
        )
    }
}

export default Shelf