import { Component } from 'react';

import cn from 'classnames';

import './employees-list-item.css';

class EmployeesListItem extends Component  {
  constructor(props) {
    super(props);
    this.state = { 
      isIncrease: false, 
      isRise: false, 
    };
  }

  handlerIncrease = (e) => {
    this.setState(({ isIncrease }) => ({ isIncrease: !isIncrease }));
  };

  handlerOnName = (e) => {
    this.setState(({ isRise }) => ({ isRise: !isRise }));
  };


  render() {
    const { name, salary, onDelete } = this.props;
    const { isIncrease, isRise } = this.state;

    const classNames = cn({
      'list-group-item': true,
      'd-flex': true,
      'justify-content-between': true,
      increase: isIncrease,
      like: isRise,
    });

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.handlerOnName}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary} />
        <div className="d-flex justify-content-center align-items-center">
          <button 
            type="button" 
            className="btn-cookie btn-sm">
            <i 
              className="fas fa-cookie" 
              onClick={this.handlerIncrease} 
            />    
          </button>
          <button 
            type="button" 
            className="btn-trash btn-sm">
            <i
              className="fas fa-trash"
              onClick={onDelete} 
            />    
          </button>
          <i className="fas fa-star" /> 
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;