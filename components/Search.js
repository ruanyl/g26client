import React, {Component} from 'react';

export default class Search extends Component {
  handleInputChange(e) {
    this.props.search(e.target.value);
  }
  render() {
    return (
      <div className='mdl-textfield mdl-js-textfield'>
        <input
          className='mdl-textfield__input'
          type='text'
          id='search'
          onChange={this.handleInputChange.bind(this)} />
        <label className='mdl-textfield__label' htmlFor='search'>Search</label>
      </div>
    );
  }

}
