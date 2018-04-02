import React, {Component} from 'react';
//import Student from '../../db/models/students.js'
import axios from 'axios';
import Main from './Main.js'

export default class Students extends Main{
  constructor(){
    super()
    this.state = {
      students: []
    };
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {this.state.students.map(student => (
          <li key={student.id}>{student.firstName} {student.lastName}</li>
          ))}
        </ul>
      </div>
    )
  }

  getStudent(){
    axios.get('/student')
    .then(response => {
      this.setState({students: response.data});
    })
    .catch(console.error)
  }

  componentDidMount() {
    this.getStudent();
  }

}

