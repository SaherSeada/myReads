import React from 'react'
import './App.css'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/search'} component={SearchPage}/>
      </div>
    )
  }
}
export default BooksApp
