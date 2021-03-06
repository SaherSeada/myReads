import React, { Component } from 'react'

class Book extends Component {

    render() {
        return(
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : ""})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange = {(e) => {this.props.changeShelf(this.props, e.target.value)}} value = {this.props.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.authors ? this.props.authors.map((author) => {return(<span key={author}>{author} </span>)}) : "Unknown Author"}</div>
            </div>
          </li>
        )
    }
}

export default Book