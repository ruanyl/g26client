import React, {Component} from 'react';
import classNames from 'classnames';
import Event from './Event';
import {
  List
} from 'material-ui';

export default class Day extends Component {
  constructor() {
    super();
    this.menuItems = [
      { payload: '1', text: 'Low' },
      { payload: '2', text: 'Medium' },
      { payload: '3', text: 'High' },
    ];
  }


  render() {
    return (
      <List subheader='today'>
        {this.props.data.map((item, index) => {
          return <Event {...item} />;
        })}
      </List>
    );
  }

}
