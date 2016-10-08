import React from 'react';
import {render} from 'react-dom';
import SearchResults from './SearchResults';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    fetch(`/api/beer?search=${this.state.value.toLowerCase()}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.state.results = data.beer;
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    return (
      <div className="search-form">
        <p><input type="search" value={this.state.value} onChange={this.handleChange}/></p>
        <div>
          <SearchResults results={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default SearchForm;
