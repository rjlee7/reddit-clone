import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Main from './Main'
import Categories from './Categories'
import Post from './Post'

class App extends Component {
  render() {
    return (
      <div className='container'>

        <div className='nav'>
          <h1 className='header'><Link to={`/`}>Readable</Link></h1>
          <button
            className='shopping-list'
            >
              New Post
          </button>
        </div>

        <div>
          <Route exact path='/' render={(props) => (
            <div>
              <Categories {...props}/>
              <Main {...props}/>
            </div>
          )}/>
          <Route path='/category' render={(props) => (
            <Categories {...props}/>
          )}/>
          <Route path={`/category/:id`} render={(props) => (
            <Post {...props}/>
          )}/>
          <Route path={`/post/:id`} component={Post}/>
        </div>
      </div>
    )
  }
}

export default App
