import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: "Dracula",
          id: "1"
        },
        {
          name: "Tasela",
          id: "2"
        },
        {
          name: "King Kong",
          id: "3"
        },
        {
          name: "Floki",
          id: "4"
        }
      ]
    }
  }

  render() {
    return (
      this.state.monsters.map(monster => <h2>{monster.name}</h2>)
    );
  }
}

export default App;
