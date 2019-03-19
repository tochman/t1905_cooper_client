import React, { Component } from 'react'
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react'

export class LoginForm extends Component {
  
  render() {
    return (
      <>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column
            style={{ maxWidth: '450px' }}
          >
            <Header
              as='h2'
              color='grey'
              textAlign='center'
            >
              Log in to your account
            </Header>

            <Form
              size='large'
            >
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Email'
                  id='email'
                  onChange={this.props.inputChangeHandler}
                />

                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  id='password'
                  onChange={this.props.inputChangeHandler}
                />

                <Button
                  fluid
                  color='grey'
                  size='large'
                  onClick={e => this.props.loginHandler(e)}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default LoginForm
