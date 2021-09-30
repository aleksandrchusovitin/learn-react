import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'All' };
  }

  handlerFilter = ({ target }) => {
    const filter = target.getAttribute('data-filter');
    this.setState({ filter });

    const { onUpdateFilter } = this.props;
    onUpdateFilter(filter);
  };

  render() {
    return (
      <div className='btn-group'>
        <button 
          className='btn btn-light'
          type='button' 
          data-filter='All'
          onClick={this.handlerFilter}
        >
          Все сотрудники
        </button>
        <button
          className='btn btn-outline-light'
          type='button'
          data-filter='ToIncrease'
          onClick={this.handlerFilter}
        >
          На повышение
        </button>
        <button
          className='btn btn-outline-light'
          type='button'
          data-filter='More1000$'
          onClick={this.handlerFilter}
        >
          З/А больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
