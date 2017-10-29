import React, { Component } from 'react';

class SearchBar extends Component {
  construtor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return <input onChange={event => console.log(event.target.value)} />
  }


}



export default SearchBar;
