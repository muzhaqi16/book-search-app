import React from 'react';
import './App.css';
import Search from './search/Search';
import ResultsList from './resultsList/ResultsList';

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        books:[],
        searchTerm:"",
        printType: null,
        bookType: null
      };
    }
  setSelected(selected) {
      this.setState({
        selected
      });
  }
  render(){
    return <div className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main>
        <Search setSelected={selection=>setSelected(selection)} />
        <ResultsList />
      </main>
    </div>
  }
}

export default App;
