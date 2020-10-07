import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();
    this.state = {
      avengers : [],
      searchField : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( users => this.setState({ avengers : users }));
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value});
  }

  render(){
    const { avengers, searchField } = this.state;
    const filterdAvengers = avengers.filter( avenger => avenger.name.toLowerCase().includes(searchField.toLowerCase()) )
    return (
      <div className="App">
        <h1>Avengers</h1>
        <SearchBox placeholder='Search Avenger' handleChange={ this.handleChange } />
        <CardList avengers={filterdAvengers} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
