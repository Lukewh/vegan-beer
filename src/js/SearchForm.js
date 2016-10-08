import React from 'react';
import {render} from 'react-dom';
import {debounce} from 'throttle-debounce';
import SearchResults from './SearchResults';

const debounceTimeout = 500;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: []
    };
    this.getData = debounce(debounceTimeout, this.getData);
  }

  handleChange(e) {
    this.getData(e.target.value);
  }

  getData(value) {
    this.setState({ value: value });
    fetch(`/api/beer?search=${this.state.value.toLowerCase()}`)
      .then(res => res.json())
      .then(data => this.state.results = data.beer)
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="search-form">
        <p><input type="search" onKeyUp={this.handleChange.bind(this)}/></p>
        <div>
          <SearchResults results={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default SearchForm;
