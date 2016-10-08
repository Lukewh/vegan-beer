import React from 'react';
import {render} from 'react-dom';

class SearchResults extends React.Component {
  render() {
    if (this.props && this.props.results && this.props.results.length) {
      return (
        <div>
          {
            this.props.results.map((beer) => {
              return (
                <div key={beer.company.id}>
                  {beer.company.company_name}
                </div>
              );
            })
          }
        </div>
      );
    } else {
      return (
        <div>No results</div>
      );
    }
  }
}

export default SearchResults;
