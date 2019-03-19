import React, { Component } from 'react';
import {
  Container,
  Input,
  Dropdown
} from 'semantic-ui-react'
import DisplayCooperResult from './components/DisplayCooperResult';
import LoginForm from './components/LoginForm';
import { authenticate } from './modules/Auth'


class App extends Component {
  state = {
    distance: '',
    gender: 'female',
    age: '',
    email: '',
    password: '',
    authenticated: false
  }

  onValueChange(event) {
    debugger
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  async onLogin(event) {
    event.preventDefault()
    let response = await authenticate(this.state.email, this.state.password)
    if (response.authenticated) {
      this.setState({ authenticated: true })
    }
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
          {!this.state.authenticated && <LoginForm inputChangeHandler={this.onValueChange.bind(this)} loginHandler={this.onLogin.bind(this)} />}

        </Container>

      </>
    );
  }
}

export default App;
