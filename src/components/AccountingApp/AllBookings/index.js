import React, { Component } from 'react'
// import Booking from './Booking'
import './style.css'
import { CashFlowIcons } from '../../icons'
import moment from 'moment'
import numeral from 'numeral'

export default class AllBookings extends Component {
  render() {
    var bookingsToRender = this.props.data || [];
    return (
      <div className="accounting-app-all-bookings-table">
        <div className="accounting-app-all-bookings-table-header">
          <div className="accounting-app-all-bookings-table-title"> All Bookings </div>
          <div className="accounting-app-all-bookings-table-header-row">
            <div> date </div>
            <div> title </div>
            <div> value </div>
            <div> shop </div>
            <div> type </div>
          </div>
        </div>
        <div className="accounting-app-all-bookings-table-rows">
          {
            bookingsToRender.map( booking => {
              return (
                <div key={ booking.id } className="accounting-app-all-bookings-table-row">
                    <div className="accounting-app-all-bookings-table-row-date"> { moment(booking.date).format("DD MMM YY") } </div>
                    <div className="accounting-app-all-bookings-table-row-title" style={ { color: "black" } }> { booking.title } </div>
                    <div className="accounting-app-all-bookings-table-row-vlaue" style={ { color: "black" } }> { numeral(booking.value).format("$ (0,0.00)") } </div>
                    <div className="accounting-app-all-bookings-table-row-shop"> { booking.shop ? booking.shop.name : "" } </div>
                    <div className="accounting-app-all-bookings-table-row-type"> <CashFlowIcons direction={ booking.type } width="25px"/> </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
