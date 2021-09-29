import cn from 'classnames';

import './employees-list-item.css';

const EmployeesListItem = ({
  name,
  salary,
  onDelete,
  onToggleProp,
  isIncrease,
  isRise,
}) => {
  const classNames = cn({
    'list-group-item': true,
    'd-flex': true,
    'justify-content-between': true,
    increase: isIncrease,
    like: isRise,
  });

  return (
    <li className={classNames}>
      <span className='list-group-item-label' onClick={onToggleProp} data-toggle="isRise">
        {name}
      </span>
      <input
        type='text'
        className='list-group-item-input'
        defaultValue={salary}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button type='button' className='btn-cookie btn-sm'>
          <i className='fas fa-cookie' onClick={onToggleProp} data-toggle="isIncrease" />
        </button>
        <button type='button' className='btn-trash btn-sm'>
          <i className='fas fa-trash' onClick={onDelete} />
        </button>
        <i className='fas fa-star' />
      </div>
    </li>
  );
};

export default EmployeesListItem;
