import React from 'react';
import {render} from 'react-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Carlsberg',
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

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.results.map((beer) => {
            return <div key={beer.company.id}>{beer.company.company_name}</div>
          })
        }
      </div>
    );
  }
}

render(<SearchForm/>, document.getElementById('app'));
