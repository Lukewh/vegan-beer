import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello world!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));