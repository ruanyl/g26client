import React, {Component} from 'react';
import Toolbar from '../components/Toolbar';
import Add from '../components/Add';
import Day from '../components/Day';
import {connect} from 'react-redux';
import {dayViewAction, monthViewAction, toggleAddViewAction} from '../actions/uiActions';
import {addTitleAction,
  addContentAction,
  addPriorityAction,
  addStartDateAction,
  addStartTimeAction,
  addEndDateAction,
  addEndTimeAction,
  saveAction
} from '../actions/addActions';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {

  componentDidMount() {
    this.props.dispatch(dayViewAction());
  }


  handleDayView() {
    this.props.dispatch(dayViewAction());
  }

  handleMonthView() {
    this.props.dispatch(monthViewAction());
  }

  handleAddView() {
    this.props.dispatch(toggleAddViewAction());
  }

  handleTitle(title) {
    this.props.dispatch(addTitleAction(title));
  }

  handleContent(content) {
    this.props.dispatch(addContentAction(content));
  }

  handlePriority(priority) {
    this.props.dispatch(addPriorityAction(priority));
  }

  handleStartDate(startDate) {
    this.props.dispatch(addStartDateAction(startDate));
  }

  handleStartTime(startTime) {
    this.props.dispatch(addStartTimeAction(startTime));
  }

  handleEndDate(endDate) {
    this.props.dispatch(addEndDateAction(endDate));
  }

  handleEndTime(endTime) {
    this.props.dispatch(addEndTimeAction(endTime));
  }

  handleSave() {
    this.props.dispatch(saveAction(this.props.addData));
  }

  render() {
    const {dispatch, view, addData} = this.props;
    const listeners = {
      onTitle: this.handleTitle.bind(this),
      onContent: this.handleContent.bind(this),
      onPriority: this.handlePriority.bind(this),
      onStartDate: this.handleStartDate.bind(this),
      onStartTime: this.handleStartTime.bind(this),
      onEndDate: this.handleEndDate.bind(this),
      onEndTime: this.handleEndTime.bind(this),
      onSave: this.handleSave.bind(this)
    };
    return (
      <div className='main'>
        <Toolbar
          dayView={this.handleDayView.bind(this)}
          monthView={this.handleMonthView.bind(this)}
          addView={this.handleAddView.bind(this)} />
        <Day />
        <Add
          {...listeners}
          {...addData}
          showAdd={view.showAdd} />
      </div>
    );
  }

}

function select(state) {
  console.log(state);
  return {
    view: state.uiState,
    addData: state.addData
  };
}

export default connect(select)(App);
