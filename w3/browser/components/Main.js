import React, {Component} from 'react';
import axios from 'axios';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: []
        }
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

    render(){
        return (
            <div>
                <h1>Students</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                        </tr>
                        {
                            this.state.students.map(student => {
                                return (
                                    <tr>
                                        <td>{student.fullName}</td>
                                    </tr>
                                )
                            })
                       }
                    </tbody>
                </table>
               
            </div>
        )
    }
}