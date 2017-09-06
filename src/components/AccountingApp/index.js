import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo'
import './style.css';
import Shops from './Shops/'
import AddBookings from './AddBookings'
// import AllDays from './AllDays'
import AllBookings from './AllBookings'
import { CSVLink } from 'react-csv'
import moment from 'moment'

class AccountingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.allBookingsQuery && this.props.allShopsQuery) {
      if (this.props.allBookingsQuery.loading && this.props.allShopsQuery.loading) {
          return <div> Loading...</div>
      }

      if (this.props.allBookingsQuery.error && this.props.allShopsQuery.error) {
          return <div> Error </div>
      }

      var bookingsToRender = this.props.allBookingsQuery.allBookings || [];
      var shopsToRender = this.props.allShopsQuery.allShops || [];
      var csvToExport = [
        [],
      ];
      var today = moment().format('MMMM Do YYYY');
      var csvFileName = `${ today }.csv`
      return (
        <div>
          <Shops shops={ shopsToRender } />
          <AddBookings shops={ shopsToRender }/>
          <AllBookings data={ bookingsToRender }/>
          <div className="accounting-app-export">
            <CSVLink
              data={ csvToExport }
              filename={ csvFileName }>
              <button>Export</button>
            </CSVLink>
          </div>
        </div>
      )
    } else {
      return <div> Loading ...</div>
    }
  }
}

const ALL_BOOKININGS_QUERY = gql`

  query AllBookingsQuery {
    allBookings {
      id
      date
      title
      value
      type
      shop {
        name
      }
    }
  }
`

const ALL_SHOPS_QUERY = gql`

  query AllShopsQuery {
    allShops {
      id
      name
      adress
    }
  }
`

export default compose(
  graphql(ALL_SHOPS_QUERY, { name: 'allShopsQuery'}),
  graphql(ALL_BOOKININGS_QUERY, { name: 'allBookingsQuery' })
)(AccountingApp)
