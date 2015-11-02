import React, {Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Event from './Event';
import { deleteEventAction } from '../actions/uiActions';
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
    console.log('Delete: ' + id);
    this.props.dispatch(deleteEventAction(id));
  }

  _handleEventEdit(id) {
    console.log('Edit: ' + id);
  }

  render() {
    return (
      <div className="list">
        <List subheader='today'>
          {this.props.data.map((item, index) => {
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
  data: state.uiState.data
}))(Day);
