import React, {Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {addTitleAction,
  addContentAction,
  addPriorityAction,
  addStartDateAction,
  addStartTimeAction,
  addEndDateAction,
  addEndTimeAction,
  saveAction
} from '../actions/addActions';
import {
  TimePicker,
  DatePicker,
  SelectField,
  RaisedButton
} from 'material-ui';
import moment from 'moment';

class Add extends Component {
  constructor() {
    super();
    this.menuItems = [
      { payload: '1', text: 'Low' },
      { payload: '2', text: 'Medium' },
      { payload: '3', text: 'High' },
    ];
    this.eventData = {
      _id: '',
      title: '',
      content: '',
      priority: 1,
      startDate: new Date(),
      startTime: new Date(),
      endDate: new Date(),
      endTime: new Date()
    };
  }

  getWrapClass() {
    let wrapClassName = 'add-view';
    if(!this.props.showAdd) {
      wrapClassName = classNames(wrapClassName, 'display-none');
    }
    return wrapClassName;
  }

  handleTitle(e) {
    this.eventData.title = e.target.value;
    this.props.dispatch(addTitleAction(e.target.value));
  }

  handleContent(e) {
    this.eventData.content = e.target.value;
    this.props.dispatch(addContentAction(e.target.value));
  }

  handlePriority(e) {
    this.eventData.priority = e.target.value;
    this.props.dispatch(addPriorityAction(e.target.value));
  }

  handleStartDate(e, date) {
    this.eventData.startDate = date;
    this.props.dispatch(addStartDateAction(date));
  }

  handleStartTime(e, time) {
    this.eventData.startTime = time;
    this.props.dispatch(addStartTimeAction(time));
  }

  handleEndDate(e, date) {
    this.eventData.endDate = date;
    this.props.dispatch(addEndDateAction(date));
  }

  handleEndTime(e, time) {
    this.eventData.endTime = time;
    this.props.dispatch(addEndTimeAction(time));
  }

  handleSave() {
    let start = moment(this.eventData.startDate).format('YYYY-MM-DD ') +
      moment(this.eventData.startTime).format('HH:mm:ss');
    let end = moment(this.eventData.endDate).format('YYYY-MM-DD ') +
      moment(this.eventData.endTime).format('HH:mm:ss');
    start = moment(start).valueOf();
    end = moment(end).valueOf();
    const data = Object.assign({}, this.eventData, {start: start, end: end});
    this.props.dispatch(saveAction(data));
  }

  render() {
    const { addData } = this.props;
    return (
      <div className={this.getWrapClass()}>
        <div className='mdl-grid'>
          <div className='mdl-cell mdl-cell--4-col'>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
              <input
                value={this.props.title}
                onChange={this.handleTitle.bind(this)}
                className='mdl-textfield__input'
                type='text'
                id='title' />
              <label className='mdl-textfield__label' htmlFor='title'>title</label>
            </div>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
              <input
                value={this.props.content}
                onChange={this.handleContent.bind(this)}
                className='mdl-textfield__input'
                type='text'
                id='content' />
              <label className='mdl-textfield__label' htmlFor='content'>content</label>
            </div>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <SelectField
              value={this.props.priority}
              onChange={this.handlePriority.bind(this)}
              hintText='Hint Text'
              menuItems={this.menuItems} />
            </div>
          </div>
          <div className='mdl-cell mdl-cell--4-col'>
            <div className='mdl-grid'>
              <div className='mdl-cell mdl-cell--6-col'>
                <DatePicker
                  defaultDate={this.props.startDate}
                  onChange={this.handleStartDate.bind(this)}
                  hintText='Start Date' />
              </div>
              <div className='mdl-cell mdl-cell--6-col'>
                <TimePicker
                  defaultTime={this.props.startTime}
                  onChange={this.handleStartTime.bind(this)}
                  format='24hr'
                  hintText='Start Time' />
              </div>
            </div>
            <div className='mdl-grid'>
              <div className='mdl-cell mdl-cell--6-col'>
                <DatePicker
                  defaultDate={this.props.endDate}
                  onChange={this.handleEndDate.bind(this)}
                  hintText='End Date' />
              </div>
              <div className='mdl-cell mdl-cell--6-col'>
                <TimePicker
                  defaultTime={this.props.endTime}
                  onChange={this.handleEndTime.bind(this)}
                  format='24hr'
                  hintText='End Time' />
              </div>
            </div>
            <div className='mdl-grid'>
              <RaisedButton
                label='Save'
                primary={true}
                onClick={this.handleSave.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(state => ({
  ...state.addData
}))(Add);
