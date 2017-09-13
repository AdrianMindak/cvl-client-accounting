import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo'
import './style.css';
import { CircledArrow } from '../../icons'
// import deleteFromArray from '../../../utillities'
// import moment from 'moment'

const initialState = {
  addBookingComponentIsOpen: false,
  firstInput: true,
  inputs: {
    shop: {
      value: '',
      valid: true,
      activeField: ""
    },
    values: [
        { title: "7%", placeholder: '656.65', value: '', valid: true, type: "IN", credit: '', debit: '' },
        { title: "19%", placeholder: '157.71', value: '', valid: true, type: "IN", credit: '', debit: ''},
        { title: "cards", placeholder: '88.98', value: '', valid: true, type: "OUT", credit: '', debit: '' },
        { title: "payout", placeholder: '7.44', value: '', valid: true, type: "OUT", credit: '', debit: '' },
        { title: "payout-wage", placeholder: '150.00', value: '', valid: true, type: "OUT", credit: '', debit: '' },
        { title: "payout-privat", placeholder: '50.00', value: '', valid: true, type: "OUT", credit: '', debit: '' },
        { title: "withdrawal", placeholder: '700.00', value: '', valid: true, type: "OUT", credit: '', debit: '' },
        { title: "difference", placeholder: '3.42', value: '', valid: true, type: "IN", credit: '', debit: '' }
    ],
    date: {
      value: '',
      valid: true
    },
  },
  error: {
    isError: false,
    title: "",
    message: []
  }
};

class AddDays extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, initialState)
  }

  _openAddBooking = () => {
    this.setState({ addBookingComponentIsOpen: !this.state.addBookingComponentIsOpen })
  }

  _clearState = () => {
    this.setState(initialState)
  }

  _clearValidation = () => {
    var { inputs } = this.state
    inputs.forEach( input => input.valid = true )
    this.setState({ inputs })
  }

  _doingFirstInput = () => {
    this.setState({ firstInput: false })
  }

  _setField = async (section, index, value) => {
    const { inputs } = this.state
    if (section === 'shop') {
      inputs.shop.value = value
      inputs.shop.activeField = index
    } else if (section === 'date') {
      inputs.date.value = value
    } else {
      if (section === 'difference' && parseFloat(value) < 0) {
        inputs.values[index].type = 'OUT'
        inputs.values[index].value = value * -1
      } else {
        inputs.values[index].value = value
      }
    }
    this.setState({ inputs })
  }

/*
  _activateField = (section, index, inputs = this.state.inputs) => {
    inputs[section].activeField = index
    this.setState({ inputs })
  }
*/

  _setClassAtributes = (section, index) => { // activate Field and set the styling for inValid
    const field = this.state.inputs[section]
    var classes = `${ field.activeField === index ? "on" : "off" } ${ field.valid ? '' : "isInValid" }`;
    return classes.trim()
  }

/*
  _checkFields = (showMissingFields = !this.state.firstInput, ) => {
    const { inputs } = this.state
    var allFilled = 0;
    var notValidMessage = '';

    for (let input in inputs) {
      if (inputs[input].value === "") {
        allFilled += 0
        inputs[input].valid = false
      } else {
        if (input === "date" | input === "value") {
          if (this._validateField(input, inputs[input].value)) {
            allFilled += 1
            inputs[input].valid = true
          } else {
            allFilled += 1
            inputs[input].valid = false
            notValidMessage = 'All fields have to be valid.'
          }
        } else {
          allFilled += 1
          inputs[input].valid = true
        }
      }
    }
    const allFieldsAreFilled = allFilled === 5 ? true : false
    const allFieldsAreValid = notValidMessage === '' ? true : false
    const notFilledMessage = 'All fields are required.'
    var allFieldsAreFilledAndValid = false

    if (showMissingFields) {
      if (allFieldsAreFilled) {
        if (allFieldsAreValid) {
          this._clearError(null, notValidMessage)
          this._clearError(null, notFilledMessage)
          allFieldsAreFilledAndValid = true
        } else {
          this._setError('Form Error', notValidMessage, showMissingFields)
          allFieldsAreFilledAndValid = false
        }
      } else {
        this._setError('Form Error', notFilledMessage, showMissingFields)
        allFieldsAreFilledAndValid = false
      }
    } else {
      this._setError('Form Error', notFilledMessage, showMissingFields)
      this._setError('Form Error', notValidMessage, showMissingFields)
      allFieldsAreFilledAndValid = false
    }

    return allFieldsAreFilledAndValid
  }

  _validateField = (input, value) => {
    switch (input) {
      case "date":
        const regexDate = /(\d?\d)-(\d?\d)-((\d{2})?(\d{2}))/g
        return regexDate.test(value)
      case "value":
        const regexValue = /(?:\d*\.)?\d+/g
        return regexValue.test(value)
      default: return this._setError('Internal Error', 'Internal Error')
    }
  }

  _setError = (title, message, isError = true) => {
    const { error } = this.state
    error.title = title
    if (error.message.indexOf(message) === -1) {
      error.message.push(message)
    }
    error.isError = isError

    var err = new Error(message)
    console.error(err)

    this.setState({ error })
  }

  _clearError(all = true, message, newTitle) {
    var { error } = this.state
    if (all) {
      error = Object.assign(initialState.error)
    } else {
      error.message = deleteFromArray(error.message, message)
      if (error.message.length === 0) {
        newTitle ? error.title = newTitle : error.title = ""
        error.isError = false
      }
    }
    this.setState({ error })
  }
*/
  _addBooking = async () => {
    const { inputs } = this.state

    var NEW_UPLOAD = inputs.values.map( input => {
      console.log(input);
      const date = new Date(inputs.date.value)
      const title = input.title
      const value = parseFloat(input.value)
      const type = input.type
      const shopID = inputs.shop.value
      return {
        date,
        title,
        value,
        type,
        shopID
      }
    })
    console.log(NEW_UPLOAD);

    await NEW_UPLOAD.forEach( variables => {
      this.props.createBookingMutation({ variables })
        .catch( err => {
          const { error } = this.state
          error.isError = true
          const message = `Error: The data couldn't be storred.`
          if (error.message.indexOf(message) === -1) {
            error.message.push(message)
          }
          console.error(err);
          console.dir(err);
          this.setState({ error })
        })
    })

    this._clearState()
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
            <div> Add Days </div>
          </div>
          <div className={ this.state.addBookingComponentIsOpen ? "open" : "closed" }>
            <div className="accounting-app-add-bookings-add-single-booking">
              <div className="accounting-app-add-bookings-add-single-booking-select-shop">
                {
                  this.props.shops.map( (shop, index) => {
                    return (
                      <button
                        key={ shop.id }
                        className={ this._setClassAtributes("shop", index) }
                        value={ shop.name }
                        onClick={ e => this._setField("shop", index, shop.id) }> { shop.name } </button>
                    )
                  })
                }
              </div>
              <div className="accounting-app-add-bookings-add-single-booking-input">
                <label>Date</label>
                <input
                  type="text"
                  className={ this.state.inputs.date.valid ? '' : "isInValid" }
                  value={ this.state.date }
                  placeholder={ `01-01-2002` }
                  onChange={ e => this._setField("date", null ,e.target.value) }
                />
              </div>
              {
                this.state.inputs.values.map( (input, index) => {
                  return (
                    <div key={ index } className="accounting-app-add-bookings-add-single-booking-input">
                      <label>{ input.title }</label>
                      <input
                        type="text"
                        className={ input.valid ? '' : "isInValid" }
                        value={ input.value }
                        placeholder={ input.placeholder }
                        onChange={ e => this._setField(input.title, index, e.target.value) }
                      />
                    </div>
                  )
                })
              }
            </div>
            <button
              className="accounting-app-add-bookings-add-single-booking-submit-button"
              onClick={ e => this._addBooking()}
              > Add Day </button>
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

export default graphql(CREATE_BOOKING_MUTATION, { name: 'createBookingMutation' })(AddDays)
