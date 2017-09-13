import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo'
import './style.css';
import Shops from './Shops/'
import AddBookings from './AddBookings'
import AddDays from './AddDays'
// import AllDays from './AllDays'
import AllBookings from './AllBookings'
import { CSVLink } from 'react-csv'
import moment from 'moment'
import numeral from 'numeral'

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
      var csvToExport = [];
      var today = moment().format('YYYY MMMM Do');
      var csvFileName = `${ today }.csv`
      const csvHeader = ["date", "title", "value", "type"]

      csvToExport.push(csvHeader)
      bookingsToRender.forEach( booking => {
        let bookingArray = [];
        csvHeader.forEach( el => {
          switch (el) {
            case 'date':
              bookingArray.push(moment(booking[el]).format('DD-MM-YYYY'))
              break
            case 'value':
              bookingArray.push(numeral(booking[el]).format('0,0.00'))
              break
            default:
              bookingArray.push(booking[el])
              break
          }
        })
        csvToExport.push(bookingArray)
      })
      return (
        <div>
          <Shops shops={ shopsToRender } />
          <AddBookings shops={ shopsToRender }/>
          <AddDays shops={ shopsToRender }/>
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
