import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  getResults () {
    const beerName = document.getElementById('search').value;
    fetch(`/api/beers/search/${beerName}`)
      .then(res => res.json())
      .then(data => console.log('data', data))
      .catch(error => console.error('error', error));
  }

  render () {
    return (
      <div>
        <input type="search" name="search" id="search" placeholder="e.g. Carlsberg"/>
        <button className="btn" onClick={this.getResults}>Go!</button>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
