import React, { Component } from 'react';
import ItemList from './ItemList';
import SearchForm from './SearchForm';

class SortList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      doves: [],
      query: '',
    };

    this.apiHost = 'http://localhost:3000/doves';
  }

  componentWillMount() {
    if (this.state.query === "") {
      this.handleFetch();
    }
  }

  // this queries the api for data
  handleFetch = (query) => {
    const fetchUrl = query && query.length ?
      `${this.apiHost}?q=${query}` : this.apiHost;

    fetch(fetchUrl)
      .then(response => response.json())
      .then((doves) => {
        this.setState({ doves });
      })
      .catch(err => {
        console.log(`Errors when fetching ${fetchUrl}:`, err);
      });
  }

  handleSearch = (query) => {
    console.log('running handleSearch with ', query);
    this.setState({ query });
    this.handleFetch(query);
  }

  render() {
    return (
      <div className="doveList">
        <SearchForm
          handleSearch={this.handleSearch}
          query={this.state.query}
        />
        <ItemList items={this.state.doves} />
      </div>
    );
  }
}

export default SortList;
