import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {

  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.searchInput.value);
  }

  render() {

    return (
      <div className="search-form">
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            name="q"
            autoFocus
            placeholder="search"
            ref={(input) => { this.searchInput = input; }}
          />
          <input type="button" name="search" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
