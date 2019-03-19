import React, { Component } from 'react';
import {
  Container,
  Input,
  Dropdown
} from 'semantic-ui-react'
import DisplayCooperResult from './components/DisplayCooperResult';


class App extends Component {
  state = {
    distance: '',
    gender: 'female',
    age: ''
  }

  onValueChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render() {
    const genderOptions = [
      {
        value: 'female', text: 'Female'
      },
      {
        value: 'male', text: 'Male'
      }
    ]
    return (
      <>
        <Container>
          <Input
            placeholder='Distance'
            id='distance'
            onChange={this.onValueChange.bind(this)}
          />
          <Input
            placeholder='Age'
            id='age'
            onChange={this.onValueChange.bind(this)}
          />
          <Dropdown
            id='gender'
            selection
            defaultValue='female'
            placeholder='Select gender'
            options={genderOptions}
            onChange={(e, { value }) => this.setState({ gender: value })}
          />
          <DisplayCooperResult
            gender={this.state.gender}
            age={this.state.age}
            distance={this.state.distance}
          />

        </Container>

      </>
    );
  }
}

export default App;
