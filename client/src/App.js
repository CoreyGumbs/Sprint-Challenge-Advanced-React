import React from 'react';
import axios from 'axios';
import './css/App.css';
import Header from './components/Header/Header';
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
    console.log(this.state.data);
    return(
      <div>
        <Header />
        APP
      </div>
    )
  }
}

export default App;
