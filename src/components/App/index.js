// APP COMPONENT
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './style.css';
import Header from './Header'
import Home from '../Home'
import AccoutningApp from '../AccountingApp'
import numeral from 'numeral'

numeral.register('locale', 'de', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: '€'
    }
});

numeral.locale('de');

export default () => {
  return (
    <div className="grid-container">
      <Header />
      <Switch>
        <Route exact path='/dashboard' component={AccoutningApp}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  )
}
