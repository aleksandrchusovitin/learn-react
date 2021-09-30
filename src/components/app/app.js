import { Component } from 'react';

import _ from 'lodash';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'John Smith',
          salary: 300,
          isIncrease: true,
          isRise: false,
          id: _.uniqueId(),
        },
        {
          name: 'Anna Rough',
          salary: 1000,
          isIncrease: false,
          isRise: true,
          id: _.uniqueId(),
        },
        {
          name: 'Mia Kovalski',
          salary: 5000,
          isIncrease: false,
          isRise: false,
          id: _.uniqueId(),
        },
      ],
      term: '',
      filter: 'All'
    };
  }

  // deleteItem = (id) => {
  //   const { data } = this.state;
  //   const filteredData = data.filter((item) => item.id !== id);
  //   this.setState({ data: filteredData });
  // };

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addEmployees = (name, salary) => {
    const { data } = this.state;
    const newEmployee = {
      name,
      salary,
      isIncrease: false,
      isRise: false,
      id: _.uniqueId(),
    };
    this.setState({ data: [...data, newEmployee] });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id ? { ...item, [prop]: !item[prop] } : item
      ),
    }));
  };

  searchEmployee = (items, term) => {
    if (term === '') {
      return items;
    }

    return items.filter((item) => item.name.indexOf(term) !== -1);
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'All':
        return items;
      case 'ToRise':
        return items.filter((item) => item.isRise);
      case 'More1000$':
        return items.filter((item) => item.salary > 1000);
      default:
        throw new Error(`Unexpected filter: ${filter}`)
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const countAllEmployees = data.length;
    const countIncreaseEmployees = data.filter((item) => item.isIncrease).length;

    const visibleData = this.searchEmployee(data, term);
    const filteredData = this.filterPost(visibleData, filter);

    return (
      <div className='app'>
        <AppInfo 
          countAllEmployees={countAllEmployees}
          countIncreaseEmployees={countIncreaseEmployees} 
        />
        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onFilterSelect={this.onFilterSelect} filter={filter} />
        </div>

        <EmployeesList
          data={filteredData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAddEmployees={this.addEmployees} />
      </div>
    );
  }
}

export default App;
