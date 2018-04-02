import React, {Component} from 'react';
import axios from 'axios';
import Form from './Form.js'

import StudentList from './StudentList.js'
import SingleStudent from './SingleStudent.js'

export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            students: [],
            selectedStudent : {},
            showForm: false

        }

        this.selectStudent = this.selectStudent.bind(this)
        this.addStudentToDb = this.addStudentToDb.bind(this)
        this.handleShowForm = this.handleShowForm.bind(this)
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        console.log("fetching")
        axios.get('/student')
        .then(res => this.setState({students: res.data}))
        .catch(console.error)
    }

    selectStudent(student) {
        return this.setState({
            selectedStudent : student
        })
    }

    addStudentToDb(student){
      axios.post('/student', student)
      .then(res => res.data)
      .then(newStud => this.setState({students: [...this.state.students, newStud]}))
    }

    handleShowForm(evt){
      return this.setState({showForm: !this.state.showForm})
    }
    //create new student form
    //firstname, last name, and email

    render(){
        return (
            <div>
                <h1>Students</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tests</th>
                        </tr>
                    </thead>
                    <StudentList students={this.state.students} selectStudent={this.selectStudent} />
                </table>
                <button onClick={this.handleShowForm}>Add Student</button>
                { this.state.showForm ? <Form studentToAdd={this.addStudentToDb}/> : null}
                {
                    this.state.selectedStudent.id && <SingleStudent student={this.state.selectedStudent} />
                }


            </div>
        )
    }
}
