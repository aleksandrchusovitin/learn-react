import { Component } from 'react';

import cn from 'classnames';

import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    const { salary } = props;
    this.state = { salary };
  }

  handlerSalary = ({ target: { value } }) => {
    const { onChangeSalary, id } = this.props;
    this.setState({ salary: value });
    onChangeSalary(id, value);
  };

  render() {
    const { name, onDelete, onToggleProp, isIncrease, isRise } = this.props;
    const { salary } = this.state;

    const classNames = cn({
      'list-group-item': true,
      'd-flex': true,
      'justify-content-between': true,
      increase: isIncrease,
      like: isRise,
    });

    return (
      <li className={classNames}>
        <span
          className='list-group-item-label'
          onClick={onToggleProp}
          data-toggle='isRise'
        >
          {name}
        </span>
        <input
          type='text'
          className='list-group-item-input'
          value={salary}
          onChange={this.handlerSalary}
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button type='button' className='btn-cookie btn-sm'>
            <i
              className='fas fa-cookie'
              onClick={onToggleProp}
              data-toggle='isIncrease'
            />
          </button>
          <button type='button' className='btn-trash btn-sm'>
            <i className='fas fa-trash' onClick={onDelete} />
          </button>
          <i className='fas fa-star' />
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
