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

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.getData();
  }

  getData() {
    fetch(`/api/beer?search=${this.state.value.toLowerCase()}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          results: data.beer
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <form className="search-form" action="/" method="GET" onSubmit={this.submitForm.bind(this)}>
          <p>
            <input type="search" onChange={this.handleChange} required="required"/>
            <button type="submit" className="btn">Go!</button>
          </p>
        </form>
        <div>
          <SearchResults results={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default SearchForm;
