import React, {Component} from 'react';
import classNames from 'classnames';
import {TimePicker, DatePicker} from 'material-ui';

export default class Add extends Component {
  handleInputChange(e) {
    this.props.search(e.target.value);
  }

  getWrapClass() {
    let wrapClassName = 'add-view';
    if(this.props.showAdd) {
      wrapClassName = classNames(wrapClassName, 'display-none');
    }
    return wrapClassName;
  }

  render() {
    return (
      <div className={this.getWrapClass()}>
        <div className='mdl-grid'>
          <div className='mdl-cell mdl-cell--4-col'>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
              <input
                className='mdl-textfield__input'
                type='text'
                id='title' />
              <label className='mdl-textfield__label' htmlFor='title'>title</label>
            </div>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
              <input
                className='mdl-textfield__input'
                type='text'
                id='content' />
              <label className='mdl-textfield__label' htmlFor='content'>content</label>
            </div>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
              <input
                className='mdl-textfield__input'
                type='text'
                id='priority' />
              <label className='mdl-textfield__label' htmlFor='priority'>priority</label>
            </div>
          </div>
          <div className='mdl-cell mdl-cell--4-col'>
            <div className='mdl-grid'>
              <div className='mdl-cell mdl-cell--6-col'>
                <DatePicker
                  hintText='Start Date' />
              </div>
              <div className='mdl-cell mdl-cell--6-col'>
                <TimePicker
                  format='24hr'
                  hintText='Start Time' />
              </div>
            </div>
            <div className='mdl-grid'>
              <div className='mdl-cell mdl-cell--6-col'>
                <DatePicker
                  hintText='End Date' />
              </div>
              <div className='mdl-cell mdl-cell--6-col'>
                <TimePicker
                  format='24hr'
                  hintText='End Time' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
