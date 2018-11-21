import React, { Component } from 'react';

// Components
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Felipe's Reading list</h1>
        <BookList></BookList>
      </div>
    );
  }
}

export default App;
