import React from 'react';
import axios from 'axios';
import './css/App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      noPlayer: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({data: res.data});
    })
    .catch(err => console.log(err));
  }

  handlePlayerName = (name) =>{
    const {data} = this.state;
    const playerNames = data.filter(player => player.name.search(name) !== -1);
    console.log(playerNames);
    playerNames.length === 0 ? this.setState({noPlayer: true}) : this.setState({data: playerNames});
    
  }

  render(){
    const {data, noPlayer} = this.state;
    console.log(noPlayer);
   
    //
    return(
      <div>
        <Header handlePlayerName={this.handlePlayerName}/>
        <Players data={data} noPlayer={noPlayer} />
      </div>
    )
  }
}

export default App;
