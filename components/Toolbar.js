import css from '../static/css/style.css';

import React, {Component} from 'react';
import Search from './Search';

export default class Toolbar extends Component {
  render() {
    return (
      <div className='mdl-grid'>
        <div className='mdl-cell mdl-cell--4-col'>
          <Search />
        </div>
        <div className='mdl-cell mdl-cell--4-col'>
          <div className='toolbar-btn'>
            <button
              className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect'
              onClick={this.props.dayView}>
              Day
            </button>
            <button
              className='toolbar-btn__space mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect'
              onClick={this.props.monthView}>
              Month
            </button>
            <button
              className='toolbar-btn__space mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect'
              onClick={this.props.allView}>
              All
            </button>
            <button
              className='toolbar-btn__space mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect'
              onClick={this.props.sync}>
              Sync
            </button>
          </div>
        </div>
        <div className='mdl-cell mdl-cell--4-col'>
          <button
            className='mdl-button mdl-js-button mdl-button--fab mdl-button--colored'
            onClick={this.props.addView}>
            <i className='material-icons'>add</i>
          </button>
        </div>
      </div>
    );
  }
}
