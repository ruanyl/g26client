import React, {Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Event from './Event';
import { deleteEventAction, editEventAction } from '../actions/uiActions';
import {
  List
} from 'material-ui';

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

  render() {
    console.log(this.props.uiState.data);
    return (
      <div className="list">
        <List subheader='today'>
          {this.props.uiState.data.map((item, index) => {
            return <Event
              key={item._id}
              {...item}
              handleEventDelete={this._handleEventDelete.bind(this)}
              handleEventEdit={this._handleEventEdit.bind(this)}
            />;
          })}
        </List>
      </div>
    );
  }
}

export default connect(state => ({
  uiState: state.uiState
}))(Day);
