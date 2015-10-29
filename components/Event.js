import React, {Component} from 'react';
import {
  ListItem
} from 'material-ui';

export default class Event extends Component {
  constructor() {
    super();
    this.priorityMapping = {
      '1': 'Low',
      '2': 'Medium',
      '3': 'High'
    };
  }

  render() {
    return (
      <ListItem
        primaryText={this.props.title}
        secondaryText={
          <p>
            <span style={{color: '#555'}}>{this.priorityMapping[this.props.priority]}</span><br/>
            {this.props.content}
          </p>
        }
        secondaryTextLines={2} />
    );
  }

}
