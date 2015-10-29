import React, {Component} from 'react';
import classNames from 'classnames';
import {
  TimePicker,
  DatePicker,
  SelectField,
  RaisedButton
} from 'material-ui';

export default class Add extends Component {
  constructor() {
    super();
    this.menuItems = [
      { payload: '1', text: 'Low' },
      { payload: '2', text: 'Medium' },
      { payload: '3', text: 'High' },
    ];
  }

  handleInputChange(e) {
    this.props.search(e.target.value);
  }

  getWrapClass() {
    let wrapClassName = 'add-view';
    if(!this.props.showAdd) {
      wrapClassName = classNames(wrapClassName, 'display-none');
    }
    return wrapClassName;
  }

  _handleTitle(e) {
    this.props.onTitle(e.target.value);
  }

  _handleContent(e) {
    this.props.onContent(e.target.value);
  }

  _handlePriority(e) {
    this.props.onPriority(e.target.value);
  }

  _handleStartDate(e, date) {
    this.props.onStartDate(date);
  }

  _handleStartTime(e, time) {
    this.props.onStartTime(time);
  }

  _handleEndDate(e, date) {
    this.props.onEndDate(date);
  }

  _handleEndTime(e, time) {
    this.props.onEndTime(time);
  }

  _handleSave() {
    this.props.onSave();
  }

  render() {
    return (
      <div className={this.getWrapClass()}>
        <div className='mdl-grid'>
          <div className='mdl-cell mdl-cell--4-col'>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
              <input
                value={this.props.title}
                onChange={this._handleTitle.bind(this)}
                className='mdl-textfield__input'
                type='text'
                id='title' />
              <label className='mdl-textfield__label' htmlFor='title'>title</label>
            </div>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
              <input
                value={this.props.content}
                onChange={this._handleContent.bind(this)}
                className='mdl-textfield__input'
                type='text'
                id='content' />
              <label className='mdl-textfield__label' htmlFor='content'>content</label>
            </div>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <SelectField
              value={this.props.priority}
              onChange={this._handlePriority.bind(this)}
              hintText='Hint Text'
              menuItems={this.menuItems} />
            </div>
          </div>
          <div className='mdl-cell mdl-cell--4-col'>
            <div className='mdl-grid'>
              <div className='mdl-cell mdl-cell--6-col'>
                <DatePicker
                  defaultDate={this.props.startDate}
                  onChange={this._handleStartDate.bind(this)}
                  hintText='Start Date' />
              </div>
              <div className='mdl-cell mdl-cell--6-col'>
                <TimePicker
                  defaultTime={this.props.startTime}
                  onChange={this._handleStartTime.bind(this)}
                  format='24hr'
                  hintText='Start Time' />
              </div>
            </div>
            <div className='mdl-grid'>
              <div className='mdl-cell mdl-cell--6-col'>
                <DatePicker
                  defaultDate={this.props.endDate}
                  onChange={this._handleEndDate.bind(this)}
                  hintText='End Date' />
              </div>
              <div className='mdl-cell mdl-cell--6-col'>
                <TimePicker
                  defaultTime={this.props.endTime}
                  onChange={this._handleEndTime.bind(this)}
                  format='24hr'
                  hintText='End Time' />
              </div>
            </div>
            <div className='mdl-grid'>
              <RaisedButton
                label='Save'
                primary={true}
                onClick={this._handleSave.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
