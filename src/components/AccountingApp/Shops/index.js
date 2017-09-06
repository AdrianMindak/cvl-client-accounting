import React, { Component } from 'react';
import './style.css';
import { Shop } from '../../icons'

export default class Shops extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activatedShop: "",
    };
  }

  _switchShop = index => {
    if (this.state.activatedShop === index) {
      this.setState({ activatedShop: "" })
    } else {
      this.setState({ activatedShop: index })
    }
  }

  render() {

    var shopsToRender = this.props.shops || [];
    return (
      <div className="accounting-app-shops">
        { shopsToRender.map( (shop, index) => {
          var color, status;
          this.state.activatedShop === index ? color = "#E22545" : color = "rgb(150,150,150)";
          this.state.activatedShop === index ? status = "on" : status = "off";
          return (
            <div
              key={ shop.id }
              className={ `accounting-app-shop ${status}` }
              onClick={ e => this._switchShop(index)}
              >
              <Shop width="100px" color={ color }/>

              <div className={ `accounting-app-shop-label ${status}` }>
                <div className="accounting-app-shop-name">
                  { shop.name }
                </div>
                <div className="accounting-app-shop-adress">
                  { shop.adress }
                </div>

              </div>
            </div>
          )
        }) }
      </div>
    )
  }
}
