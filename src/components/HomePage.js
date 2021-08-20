import React, { Component } from 'react'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    
    state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }

    getBooks() {
        BooksAPI.getAll().then(books => {
            let currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
            let wantToRead = books.filter(book => book.shelf === 'wantToRead')
            let read = books.filter(book => book.shelf === "read")
            this.setState({currentlyReading, wantToRead, read})
        })
    }
    
    componentDidMount() {
        this.getBooks()
    }

    changeShelf(book, shelf) {
      BooksAPI.update(book, shelf).then(() => this.getBooks())
    }

    render() {
        return(
            <div className="list-books">
              
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <div className="list-books-content">
                <div>
                  <Shelf name="Currently Reading" books={this.state.currentlyReading} changeShelf = {this.changeShelf.bind(this)}/>
                  <Shelf name="Want To Read" books={this.state.wantToRead} changeShelf = {this.changeShelf.bind(this)}/>
                  <Shelf name="Read" books={this.state.read} changeShelf = {this.changeShelf.bind(this)}/>
                </div>
              </div>
              
              <div className="open-search">
                <Link to="/search">Add a Book</Link>
              </div>
            
            </div>
        )
    }
}

export default HomePage