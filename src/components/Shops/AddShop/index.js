import React, { Component } from 'react';
//import './style.css';
import { gql, graphql, compose } from 'react-apollo';

class AddShop extends Component {
  state = {
    name: ''
  }

  addShop = async () => {
    const { name } = this.state
    console.log(this.props)
    await this.props.createShopMutation({
      variables: {
        name
      }
    })
  }

  render() {
    return (
      <form>
        <input type='text' placeholder="Name of the shop?" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={() => this.addShop()} > Submit </button>
      </form>
    )
  }
}

const CREATE_SHOP = gql`
  mutation CreateShopMutation($name: String!) {
    createShop(name: $name) {
      id
      createdAt
      name
    }
  }
`

export default compose(
  graphql(CREATE_SHOP, { name: 'createShopMutation' })
)(AddShop)
