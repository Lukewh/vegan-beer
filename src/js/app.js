import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <form action="/" method="GET">
          <label for="search">Search for a beer</label>
          <input type="search" name="search" id="search" placeholder="e.g. Carlsberg"/>
          <button className="btn" type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
