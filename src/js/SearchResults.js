import React from 'react';
import {render} from 'react-dom';

class SearchResults extends React.Component {
  render() {
    if (this.props && this.props.results && this.props.results.length) {
      let beerIndex = 0;
      let animationDelay = 0.1;
      let animationDelayInc = 0.1;
      return (
        <div>
          {
            this.props.results.map((beer) => {
              beerIndex++;
              animationDelay = animationDelay + animationDelayInc;

              let divStyle = {
                animationDelay: animationDelay + 's'
              };

              return (
                <div className="search-result fade-in" style={divStyle} key={beer.company.id}>
                  <div>{beer.company.company_name}</div>
                  <div>{beer.company.status}</div>
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
