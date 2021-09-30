import cn from 'classnames';

import './app-filter.css';

const AppFilter = ({ onFilterSelect, filter }) => {
  const buttonsData = [
    { name: 'All', label: 'Все сотрудники' },
    { name: 'ToRise', label: 'На повышение' },
    { name: 'More1000$', label: 'З/П больше 1000$' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const isActiveBtn = (filter === name);
    const classes = cn({
      btn: true,
      'btn-outline-light': !isActiveBtn,
      'btn-light': isActiveBtn,
    });

    return (
      <button
        key={name}
        className={classes}
        type='button'
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className='btn-group'>
      {buttons}
    </div>
  );
};

export default AppFilter;
