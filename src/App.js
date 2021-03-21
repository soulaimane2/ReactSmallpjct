import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBar} from './components/searchBar/searchBar.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      Bands:[],
      searchField:""
    }
  }

  componentDidMount(){
    // code
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({Bands : users}));
  }

  render(){
    // the deconstractor should have the same names as the state keys
    const {Bands,searchField} = this.state;
    // we filter the monsters according to what we searched for
    const filtredMonst = Bands.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <SearchBar placeholder="Search Monsters" handleChange={
          e => this.setState(
            {searchField: e.target.value},()=>{
              
          })
        }/>
        <CardList monsters={filtredMonst}/>
      </div>
    );
  }
}

export default App;
