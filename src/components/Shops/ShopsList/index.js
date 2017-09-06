import React, { Component } from 'react';
import './style.css';
import { gql, graphql, compose } from 'react-apollo';
import { TrashCan } from '../../icons'

class ShopsList extends Component {
  state = {
    shops: []
  }

  deleteShop = async (id) => {
    this.setState({ shops: this.props.data.allShops })
    var newState = []

    this.state.shops.forEach(shop => {
      if (shop.id !== id) {
        newState.push(shop)
      }
    })

    this.setState({ shops: newState })
    await this.props.deleteShopMutation({
      variables: {
        id
      }
    })
  }

  render () {
    if (this.props.data.loading) {
      return <p>Loading ...</p>;
    }

    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    return (
      <div className="shop-list" >
          { this.props.data.allShops.map( shop => {
                  return (
                    <div key={shop.id}>
                      <input
                        onChange={ () => {} }
                        value={ shop.name }
                        placeholder={ shop.name }
                      />

                      <button
                        onClick={() => this.deleteShop(shop.id)}
                      > <TrashCan width="50px"/>
                      </button>
                    </div>
                  )
                }
             )
          }
      </div>
    )
  }
}


const shopsListQuery = gql`
  query shopsListQuery {
    allShops {
      id
      name
    }
  }
`;

const DELETE_SHOP = gql`
  mutation DeleteShopMutation($id: ID!) {
    deleteShop(id: $id) {
      id
    }
  }
`


export default compose(
  graphql(DELETE_SHOP, { name: 'deleteShopMutation' }),
  graphql(shopsListQuery)
)(ShopsList)
