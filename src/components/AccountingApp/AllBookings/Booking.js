import React, { Component } from 'react'
import { CashFlowIcons } from '../../icons'
import moment from 'moment'
import numeral from 'numeral'



export default class AllBookings extends Component {
  render() {
    return (
      <div key={ this.props.bookingKey } className="accounting-app-all-bookings-table-row">
          <div className="accounting-app-all-bookings-table-row-date"> { moment(this.props.date).format("DD MMM YY") } </div>
          <div className="accounting-app-all-bookings-table-row-title" style={ { color: "black" } }> { this.props.title } </div>
          <div className="accounting-app-all-bookings-table-row-vlaue" style={ { color: "black" } }> { numeral(this.props.value).format("$ (0[.]00)") } </div>
          <div className="accounting-app-all-bookings-table-row-shop"> { this.props.shop } </div>
          <div className="accounting-app-all-bookings-table-row-type"> <CashFlowIcons direction={ this.props.type }/> </div>
      </div>
    )
  }
}
