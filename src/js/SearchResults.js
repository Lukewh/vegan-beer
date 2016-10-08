import React from 'react';
import {render} from 'react-dom';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <p>Search results</p>
        <SearchResult/>
      </div>
    );
  }
}

export default SearchResults;
