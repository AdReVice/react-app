import React from 'react';
import axios from 'axios';

export default class EmployeeList extends React.Component {
  state = {
    persons: []
  }

  getEmployeeList() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        this.state.persons
    )
  }
}