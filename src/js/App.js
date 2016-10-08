import React from 'react';
import {render} from 'react-dom';
import SearchForm from './SearchForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchForm/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
