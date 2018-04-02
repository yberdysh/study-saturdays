import React, { Component } from 'react';

export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName : '',
      email : '',
      disabled: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.disableSubmit = this.disableSubmit.bind(this)
  }

  handleChange(evt){
    if(evt.target.name === 'firstName' || evt.target.name === 'lastName') {
      console.log("ev", evt.target.value)
      if (evt.target.value.match(/[0-9]/)){
        console.log("in here")
        return this.setState({disabled: true, [evt.target.name]: evt.target.value })
      } else {
        return this.setState({disabled: false, [evt.target.name]: evt.target.value})
      }
    }
    this.setState({
      [evt.target.name]: evt.target.value
    })
    this.disableSubmit(evt);
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.studentToAdd({firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email});
    this.setState({
      firstName: '',
      lastName : '',
      email : ''
    })
  }

  disableSubmit(evt){
    // return (event.target.value.length === 0 || event.target.value.includes(/\d+/g))
    if (this.state.firstName.match(/\d+/g) || (this.state.lastName.match(/\d+/g))){
      this.setState({disabled: true})
    } else {
      this.setState({disabled: false})
    }
  }

  render() {
    console.log(this.props)
    return (
    <div className="form">
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
        {!this.state.disabled && <button type="submit">Submit</button>}
        {this.state.disabled && (
          <div>
            <p style={{color: "red"}}>Name must not include numeric characters</p>
          </div>)  }

      </form>
    </div>
    )
  }
}
