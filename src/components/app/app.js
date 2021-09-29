import { Component } from 'react';

import _ from 'lodash';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John Smith', salary: 300, id: _.uniqueId() },
        { name: 'Anna Rough', salary: 1000, id : _.uniqueId() },
        { name: 'Mia Kovalski', salary: 5000, id: _.uniqueId() },
      ],
    };
  }

  // deleteItem = (id) => {
  //   const { data } = this.state;
  //   const filteredData = data.filter((item) => item.id !== id);
  //   this.setState({ data: filteredData });
  // };

  deleteItem = (id) => {
    this.setState(({ data }) => ({ data: data.filter((item) => item.id !== id )}));
  };

  addEmployees = (name, salary) => {
    const { data } = this.state;
    const newEmployee = { name, salary, id: _.uniqueId() };
    this.setState({ data: [...data, newEmployee] });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
  
        <EmployeesList 
          data={data}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm 
          onAddEmployees={this.addEmployees}
        />
      </div>
    );
  }
};

export default App;