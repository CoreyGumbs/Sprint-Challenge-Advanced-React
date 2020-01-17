import React from 'react';
import axios from 'axios';
import './css/App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({data: res.data});
    })
    .catch(err => console.log(err));
  }

  render(){
    const {data} = this.state;
    //
    return(
      <div>
        <Header />
        <Players data={data} />
      </div>
    )
  }
}

export default App;
