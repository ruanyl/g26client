import React, {Component} from 'react';
import {
  ListItem,
  IconButton,
  IconMenu,
  FontIcon,
  ListDivider
} from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import moment from 'moment';

export default class Event extends Component {
  constructor(props) {
    super(props);
    let moreBtn = <IconButton iconClassName="fa fa-ellipsis-v" tooltip="More"/>;
    this.priorityMapping = {
      '1': 'Low',
      '2': 'Medium',
      '3': 'High'
    };
    this.rightIconMenu = <IconMenu
      iconButtonElement={moreBtn}
      iconStyle={{ color: '#ccc' }}
      onItemTouchTap={this._handleItem.bind(this)}
      >
      <MenuItem index={1} primaryText='Edit' />
      <MenuItem index={2} primaryText='Remove' />
    </IconMenu>;
  }

  _handleItem(e, value) {
    if(value.props.primaryText === 'Edit') {
      let event = {
        _id: this.props._id,
        title: this.props.title,
        content: this.props.content,
        priority: this.props.priority,
        start: this.props.start,
        end: this.props.end
      };
      this.props.handleEventEdit(event);
    } else if(value.props.primaryText === 'Remove') {
      this.props.handleEventDelete(this.props._id);
    }
  }

  getPriorityBtn(priority) {
    switch(priority) {
      case 1:
        return <FontIcon className='fa fa-angle-double-down' color={'#9e9e9e'} />;
      case 2:
        return <FontIcon className='fa fa-angle-up' color={'#9e9e9e'} />;
      case 3:
        return <FontIcon className='fa fa-exclamation-circle' color={'#f48fb1'} />;
      default:
        return <FontIcon className='fa fa-angle-double-down' color={'#9e9e9e'} />;
    }
  }

  render() {
    return (
      <div>
        <ListItem
          primaryText={this.props.title}
          rightIconButton={this.rightIconMenu}
          leftIcon={this.getPriorityBtn(this.props.priority)}
          secondaryText={
            <p>
              <span style={{color: '#555'}}>{this.props.content}</span><br/>
              {moment(this.props.start).format('MM/DD H:m')} to {moment(this.props.end).format('MM/DD H:m')}
            </p>
          }
          secondaryTextLines={2} />
        <ListDivider />
      </div>
    );
  }

}
