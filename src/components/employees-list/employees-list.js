import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {
  return (
    <ul className="app-list list-group">
      {data.map(({ name, salary, id }) => (
        <EmployeesListItem 
          key={id} 
          name={name} 
          salary={salary} 
          onDelete={() => onDelete(id)}
        />))}
    </ul>
  );
};

export default EmployeesList;