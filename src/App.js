import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      question : "did we ?",
      Bands:[]
    }
  }

  componentDidMount(){
    // code
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({Bands : users}));
  }

  render(){
    return (
      <div className="App">
              <CardList monsters={this.state.Bands}/>
      </div>
    );
  }
}

export default App;
