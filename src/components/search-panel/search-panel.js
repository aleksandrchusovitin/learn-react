import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleSearch = ({ target: { value } }) => {
    this.setState({ term: value });

    const { onUpdateSearch } = this.props;
    onUpdateSearch(value);
  };

  render() {
    const { term } = this.state;

    return (
      <input 
        type="text" 
        className="form-control search-input" 
        placeholder="Найти сотрудника"
        value={term}
        onChange={this.handleSearch}
      />
    );
  }
};

export default SearchPanel;