import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteEventAction, editEventAction } from '../actions/uiActions';
import { Paper, FontIcon } from 'material-ui';
import moment from 'moment';

class Month extends Component {

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
    const { ui } = this.props;
    return (
      <div className='month'>
        { ui.data.map((event) => {
          return (
            <div 
              key={ event._id }
              className='month-tile'>
              <Paper
                style={{ padding: '15px 15px', height: '100%' }}
                zDepth={1}>
                <p className='month-priority'>
                  { this.getPriorityBtn(event.priority) }
                </p>
                <p className='month-title'>{ event.title }</p>
                <p className='month-content'>{ event.content }</p>
                <p className='month-time'>{moment(event.start).format('MM/DD H:m')} to {moment(event.end).format('MM/DD H:m')}</p>
              </Paper>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default connect(state => ({
  ui: state.uiState
}))(Month);
