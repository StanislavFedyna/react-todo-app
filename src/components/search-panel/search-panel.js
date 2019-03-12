import React from 'react';

import './search-panel.css';
        
export default class SearchPanel extends React.Component {
  state = {
    term:''
  };

  onSearchChange = (e) => {
     const term = e.target.value;
     this.setState({term});
     this.props.onSearchChange(term);
  }

  render(){
    let { term } = this.state;
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                value={term}
                onChange={this.onSearchChange}
                />
    );
  }

}

