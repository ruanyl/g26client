import React, {Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Event from './Event';
import { deleteEventAction, editEventAction } from '../actions/uiActions';
import {
  List
} from 'material-ui';
import moment from 'moment';

class Day extends Component {
  constructor() {
    super();
    this.menuItems = [
      { payload: '1', text: 'Low' },
      { payload: '2', text: 'Medium' },
      { payload: '3', text: 'High' },
    ];
  }

  _handleEventDelete(id) {
    this.props.dispatch(deleteEventAction(id));
  }

  _handleEventEdit(event) {
    this.props.dispatch(editEventAction(event));
  }

  getDayData() {
    let dayData = {
      today: [],
      tomorrow: [],
      dayAfterTomorrow: []
    };
    this.props.uiState.data.forEach(function(current) {
      if(moment(current.start).isAfter(moment().startOf('day')) &&
        moment(current.start).isBefore(moment().endOf('day'))) {
          dayData.today.push(current);
      } else if(moment(current.start).isAfter(moment().startOf('day').add(1, 'd')) &&
        moment(current.start).isBefore(moment().endOf('day').add(1, 'd'))) {
          dayData.tomorrow.push(current);
      } else if(moment(current.start).isAfter(moment().startOf('day').add(2, 'd')) &&
        moment(current.start).isBefore(moment().endOf('day').add(2, 'd'))) {
          dayData.dayAfterTomorrow.push(current);
      }
    });
    return dayData;
  }

  render() {
    const dayData = this.getDayData();
    return (
      <div>
        <div className="list">
          <List subheader='today'>
            {dayData.today.map((item, index) => {
              return <Event
                key={item._id}
                {...item}
                handleEventDelete={this._handleEventDelete.bind(this)}
                handleEventEdit={this._handleEventEdit.bind(this)}
              />;
            })}
          </List>
        </div>
        <div className="list">
          <List subheader='tomorrow'>
            {dayData.tomorrow.map((item, index) => {
              return <Event
                key={item._id}
                {...item}
                handleEventDelete={this._handleEventDelete.bind(this)}
                handleEventEdit={this._handleEventEdit.bind(this)}
              />;
            })}
          </List>
        </div>
        <div className="list">
          <List subheader='day after tomorrow'>
            {dayData.dayAfterTomorrow.map((item, index) => {
              return <Event
                key={item._id}
                {...item}
                handleEventDelete={this._handleEventDelete.bind(this)}
                handleEventEdit={this._handleEventEdit.bind(this)}
              />;
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  uiState: state.uiState
}))(Day);
