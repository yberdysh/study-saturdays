import axios from 'axios';
import React, {Component} from 'react';
import Main from './Main.js'

export default class Tests extends Component{
  constructor(){
    super()
    this.state = {
      tests: []
    };
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <h1>Tests</h1>
        <ul>
          {this.state.tests.map(test => (
          <li key={test.id}>.{test.subject} {test.grade}</li>
          ))}
        </ul>
      </div>
    )
  }

  getTest(){
    axios.get('/test')
    .then(response => {
      this.setState({tests: response.data});
    })
    .catch(console.error)
  }

  componentDidMount() {
    this.getTest();
  }

}
