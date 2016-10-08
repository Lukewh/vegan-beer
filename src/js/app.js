import React from 'react';
import {render} from 'react-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Carlsberg' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    fetch(`/api/beer?search=${this.state.value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('data', data);
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    return (
      <input type="search" value={this.state.value} onChange={this.handleChange}/>
    );
  }
}

render(<SearchForm/>, document.getElementById('app'));
