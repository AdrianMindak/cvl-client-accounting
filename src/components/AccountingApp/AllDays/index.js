import React, { Component } from 'react';
import './style.css'
import { ValidationIcons } from '../../icons'
import moment from 'moment'
import numeral from 'numeral'

export default class AllDays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        { key: 1, date: "1-2-2017", value: 543.44, shop: "CVL", balanced: true },
        { key: 2, date: "2-2-2017", value: 445.55, shop: "CVL", balanced: false },
        { key: 3, date: "3-2-2017", value: 652.55, shop: "CVL", balanced: true },
        { key: 4, date: "1-2-2017", value: 543.44, shop: "CVL", balanced: true },
        { key: 5, date: "2-2-2017", value: 445.55, shop: "CVL", balanced: false },
        { key: 6, date: "3-2-2017", value: 652.55, shop: "CVL", balanced: true },
        { key: 7, date: "1-2-2017", value: 543.44, shop: "CVL", balanced: true },
        { key: 8, date: "2-2-2017", value: 445.55, shop: "CVL", balanced: false },
        { key: 9, date: "3-2-2017", value: 652.55, shop: "CVL", balanced: true },
        { key: 10, date: "1-2-2017", value: 543.44, shop: "CVL", balanced: true },
        { key: 12, date: "2-2-2017", value: 445.55, shop: "CVL", balanced: false },
        { key: 13, date: "3-2-2017", value: 652.55, shop: "CVL", balanced: true }
      ],
    };
  }

  render() {

    var daysToRender = this.state.days /* this.props.allBookingsQuery.allBookings */
    return (
      <div className="accounting-app-all-days-table">
        <div className="accounting-app-all-days-table-header">
          <div className="accounting-app-all-days-table-title"> all days </div>
          <div className="accounting-app-all-days-table-header-row">
              <div> date </div>
              <div> value </div>
              <div> shop </div>
              <div> bal. </div>
          </div>
        </div>
        <div className="accounting-app-all-days-table-rows">
          {
            daysToRender.map( day => {
              return (
                <div key={ day.key } className="accounting-app-all-days-table-row">
                    <div className="accounting-app-all-days-table-row-date"> { moment(day.date).format("DD MMM YY") } </div>
                    <div className="accounting-app-all-days-table-row-value" style={ { color: "black" } }> { numeral(day.value).format("$ 0[.]00") } </div>
                    <div> { day.shop } </div>
                    <div className="accounting-app-all-days-table-row-validation">
                      <ValidationIcons validation={ day.balanced } width="20px"/>
                    </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
