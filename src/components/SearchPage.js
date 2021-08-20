import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchPage extends Component {

  state = {
    query: '',
    homePageBooks: [],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      let homePageBooks = books
      this.setState({ homePageBooks })
    })
  }

  changeShelf(book, shelf) {
    BooksAPI.update(book, shelf)
  }

  handleChange = async e => {
    try {
      const query = e.target.value
      this.setState({ query })
      if (query.trim()) {
        const foundBooks = await BooksAPI.search(query)
        if (foundBooks.error) {
          this.setState({ books: [] })
        }
        else {
          this.setState({ books: foundBooks })
        }
      }
      else {
        this.setState({ books: [] })
      }
    }
    catch (error) {
      console.log("Error!")
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query} />

          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length > 0 &&
              this.state.books.map(book => {
                const shelf = this.state.homePageBooks.find(foundBook => foundBook.id === book.id)
                shelf ? book.shelf = shelf.shelf : book.shelf = "none"
                return (
                  <Book key={book.id} changeShelf={this.changeShelf} {...book} />
                )
              })
            }
            {this.state.books.length === 0 && <h1> No results found </h1>}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage