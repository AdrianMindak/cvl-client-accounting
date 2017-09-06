import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'
import './style.css';
import { CircledArrow } from '../../icons'

const initialState = {
  doingFirstInput: true,
  date: "",
  title: "",
  value: "",
  type: "",
  shopID: "",
  activatedTitle: "",
  activatedShop: "",
  activatedField: {
    shop: "",
    title: ""
  },
  addBookingComponentIsOpen: false,
  allInputsFilled: [false, {
      title: false,
      shopID: false,
      value: false,
      type: false,
      date: false
  }],
  allInputsValid: [false, {
    title: false,
    shopID: false,
    value: false,
    type: false,
    date: false
  }],
  bookingInputs: [
    { title: "7%" , type: "IN" },
    { title: "19%", type: "IN" },
    { title: "cards", type: "IN" },
    { title: "payout", type: "OUT" },
    { title: "payout-wage", type: "OUT" },
    { title: "payout-privat", type: "OUT" },
    { title: "withdrawal", type: "OUT" }
  ],
  error: {
    title: "",
    message: [],
    isError: false,
    isInValid: {
      shopID: false,
      title: false,
      date: false,
      value: false
    }
  }
};

class AddBookings extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  _openAddBooking = () => {
    this.setState({ addBookingComponentIsOpen: !this.state.addBookingComponentIsOpen })
  }

  _clearState = () => {
    this.setState(initialState)
  }

  _clearValidation = () => {
    var { error, allInputsFilled } = this.state
    allInputsFilled =  initialState.allInputsFilled
    error.isInValid = {
      shopID: false,
      title: false,
      date: false,
      value: false
    }
    this.setState({ error, allInputsFilled })
  }

  _activateField = (section, index) => {
    const { activatedField } = this.state
    activatedField[section] = index
    this.setState({ activatedField })
  }

  _activateShop = index => {
    this.setState({ activatedShop: index })
  }

  _setShop = async (shopID, index) => {
    const { doingFirstInput } = this.state
    if (!doingFirstInput) {
      await this._clearValidation()
    }

    await this._activateField("shop", index)
    await this.setState({ shopID , doingFirstInput: false })

    this._checkFieldsForInput() // when we do our first input we want to see all the missing inputs
  }

  _activateTitle = index => {
    this.setState({ activatedTitle: index })
  }

  _setTitle = async (title, index) => {
    const { doingFirstInput } = this.state
    if (!doingFirstInput) {
      await this._clearValidation()
    }

    await this._activateTitle(index)
    await this.setState({ title })
    await this._setType(title)
    this._checkFieldsForInput() // when we do our first input we want to see all the missing inputs
  }

  _setType = (title) => {
    const { doingFirstInput } = this.state
    if (!doingFirstInput) {
      this._clearValidation()
    }

    const { bookingInputs, allInputsFilled } = this.state
    bookingInputs.forEach( (obj,index) => {
      if (obj.title === title) {
        allInputsFilled[1].type = true
        this.setState({ type: obj.type, allInputsFilled, doingFirstInput: false })
      }
    })
  }

  _checkFieldsForInput = showMissingFields => {
    const { title, shopID, value, type, date , doingFirstInput} = this.state
    const listOfKeys = [ "title", "shopID", "value", "type", "date" ]
    const listOfValues = [ title, shopID, value, type, date ]
    const { allInputsFilled } = this.state
    const result = allInputsFilled[1]
    var allTrue = 0

    listOfValues.forEach( (key, index) => {
      if (key !== "") {
        result[listOfKeys[index]] = true
        allTrue += 1
      }
    })

    allTrue = allTrue === 5 ? 1 : 0

    const isInValid = {}
    const arrOfEntries = Object.entries(allInputsFilled[1])
    arrOfEntries.forEach( arr => {
      isInValid[arr[0]] = !arr[1]
    })

    if (showMissingFields || !doingFirstInput) {
      this._setError(null,"All fields are required.", isInValid, false)
    } else {
      this.setState({ allInputsFilled: [ allTrue, result ] })
    }
  }

  _validateBooking = () => {
    const { allInputsFilled } = this.state

    if (allInputsFilled[0]) {
      console.log("COOL");
      /*
       var { value, date } = this.state
      const fields = [
        [shopID, "shop"],
        [ title, "title" ],
        [ date, "date"],
        [ value, "value"]
      ];
      const errorAndValidationMessages = []
      const error = this.state.error

      var validatingFields = (field, fieldStr) => {
        if (field === "") {
          errorAndValidationMessages.push(fieldStr)
          error.isInValid[fieldStr] = true
        }
      }

      fields.forEach( field => validatingFields(field[0], field[1]))

      if (errorAndValidationMessages !== []) {
        error.title = "Error"
        var errorMessage = ""
        errorAndValidationMessages.forEach( (string, index, arr) => {
          if (arr.length - 2 === index) {
            errorMessage += `a ${ string } and `
          } else if (arr.length - 1 === index) {
            errorMessage += `a ${ string } `
          } else {
            errorMessage += `a ${ string }, `
          }
        })
        this._setError(null, `You need to add ${ errorMessage }to your booking.` )
        return false
      } else {
        return true
      }
      */
    } else {
      const isInValid = {}
      const arrOfEntries = Object.entries(allInputsFilled[1])
      arrOfEntries.forEach( arr => {
        isInValid[arr[0]] = !arr[1]
      })
      this._setError(null,"All fields are required.", isInValid)
    }
  }

  _setError = (title, message, isInValid, isError) => {
    const { error } = this.state
    error.title = title
    if (error.message.indexOf( message ) === -1) {
      error.message.push( message )
    }
    error.isInValid = isInValid
    error.isError = isError || true
    var err = new Error(message)
    console.error(err)
    this.setState({ error })
  }

  _addBooking = async () => {
    const { title, shopID , allInputsValid } = this.state
    var { value, type, date } = this.state

    await this.setState({ doingFirstInput: false })
    await this._validateBooking()

    if (allInputsValid[0]) {
      value = parseFloat(value);
      type === true ? type = "IN" : type = "OUT";
      date = new Date(date);
      await this.props.createBookingMutation({
        variables: {
          date,
          title,
          value,
          type,
          shopID
        }
      })
    }
  }

  render() {
    return (
      <div className="accounting-app-add-bookings">
        <div className={ `accounting-app-add-bookings-error ${ this.state.error.isError ? "open" : "closed" }` }>
          { this.state.error.message.map( (message, index) => (<div key={ index } className="accounting-app-add-bookings-error-message"> { message } </div>) ) }
        </div>
        <div className="accounting-app-add-bookings-body">
          <div className="accounting-app-add-bookings-header">
            <div onClick={ e => this._openAddBooking() }>
              <CircledArrow
                direction={ this.state.addBookingComponentIsOpen ? "down" : "right" }
                filled={ this.state.addBookingComponentIsOpen }
                width="30px"
                color="white"/>
            </div>
            <div> Add Bookings </div>
          </div>
          <div className={ this.state.addBookingComponentIsOpen ? "open" : "closed" }>
            <div className="accounting-app-add-bookings-add-single-booking">
              <div className="accounting-app-add-bookings-add-single-booking-select-shop">
                {
                  this.props.shops.map( (shop, index) => {
                    var classAtributes = () => {
                      var classes = "";
                      classes += this.state.activatedField.shop === index ? "on" : "off"
                      classes += " "
                      classes += this.state.error.isInValid.shopID ? "isInValid" : ""
                      classes.trim()
                      return classes
                    }
                    return (
                      <button
                        key={ shop.id }
                        className={ classAtributes() }
                        value={ shop.name }
                        onClick={ e => this._setShop(shop.id, index) }> { shop.name } </button>
                    )
                  })
                }
              </div>
              <div className="accounting-app-add-bookings-add-single-booking-select-title">
                {
                  this.state.bookingInputs.map( (obj, index) => {
                    var classAtributes = () => {
                      var classes = "";
                      classes += this.state.activatedTitle === index ? "on" : "off"
                      classes += " "
                      classes += this.state.error.isInValid.title ? "isInValid" : ""
                      classes.trim()
                      return classes
                    }
                    return (
                      <button
                        key={ index }
                        className={ classAtributes() }
                        value={ obj.title }
                        onClick={ e => this._setTitle(obj.title, index) }> { obj.title } </button>
                    )
                  })
                }
              </div>
              <div className="accounting-app-add-bookings-add-single-booking-input">
                <label>Date</label>
                <input
                  type="text"
                  className={ this.state.error.isInValid.date ? "isInValid" : "" }
                  value={ this.state.date }
                  placeholder={ `dd-mm-yyyy` }
                  onChange={ async e => {
                    await this.setState({ date: e.target.value })
                    this._checkFieldsForInput()
                  } }
                />
              </div>
              <div className="accounting-app-add-bookings-add-single-booking-input">
                <label>Value</label>
                <input
                  type="text"
                  className={ this.state.error.isInValid.date ? "isInValid" : "" }
                  value={ this.state.value }
                  placeholder={ `type in a value` }
                  onChange={ async e => {
                    await this.setState({ value: e.target.value })
                    this._checkFieldsForInput()
                  } }
                />
              </div>
            </div>
            <button
              className="accounting-app-add-bookings-add-single-booking-submit-button"
              onClick={ e => this._addBooking()}
              > Add Booking </button>
        </div>
      </div>
    </div>
    )
  }
}

const CREATE_BOOKING_MUTATION = gql`
  mutation CreateBookingMutation($date: DateTime!, $title: String!, $shopID: ID!, $value: Float!, $type: String! ) {
    createBooking( date: $date, title: $title, shopId: $shopID, value: $value, type: $type) {
      id
      date
      title
      value
      type
      shop {
        id
        name
      }
    }
  }
`

export default graphql(CREATE_BOOKING_MUTATION, { name: 'createBookingMutation' })(AddBookings)
