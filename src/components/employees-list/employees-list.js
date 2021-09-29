import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="app-list list-group">
      {data.map(({ name, salary, isIncrease, isRise, id }) => (
        <EmployeesListItem 
          key={id} 
          name={name} 
          salary={salary} 
          onDelete={() => onDelete(id)}
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
          isIncrease={isIncrease}
          isRise={isRise}
        />))}
    </ul>
  );
};

export default EmployeesList;