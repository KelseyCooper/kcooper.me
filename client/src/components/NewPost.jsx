import React, { Component } from 'react'
import { extendObservable } from 'mobx'
import { observer } from 'mobx-react'
import { Button, Input, Container, Header } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class NewPost extends React.Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      title: '',
    })
  }

  onChange = (e) => {
    const { name, value } = e.target
    this[name] = value
  }

  onSubmit = async () => {
    const { title } = this

    const response = await this.props.mutate({
      variables: { title },
    })

  }

  render() {
    const { email, password } = this
    return (
      <Container text>
        <Header as="h2">Login</Header>
        <Input
          name="title"
          onChange={this.onChange}
          value={title}
          placeholder="title"
          fluid
        />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    )
  }
}

const newPostMutation = gql`
  mutation($title: String!) {
    createPost(title: $title,) {
        id
        title
    }
  }
`
export default graphql(newPostMutation)(observer(NewPost))