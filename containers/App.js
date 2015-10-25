import React, {Component} from 'react';
import Toolbar from '../components/Toolbar';
import Add from '../components/Add';
import {connect} from 'react-redux';
import {dayViewAction, monthViewAction, toggleAddViewAction} from '../actions/actions';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class App extends Component {

  handleSearch(text) {
    this.props.dispatch(searchAction(text))
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

  render() {
    const {dispatch, view} = this.props;
    console.log(view);
    return (
      <div className='main'>
        <Toolbar
          dayView={this.handleDayView.bind(this)}
          monthView={this.handleMonthView.bind(this)}
          addView={this.handleAddView.bind(this)} />
        <Add
          showAdd={view.showAdd} />
      </div>
    );
  }

}

function select(state) {
  console.log(state);
  return {
    view: state.uiState
  };
}

export default connect(select)(App);
