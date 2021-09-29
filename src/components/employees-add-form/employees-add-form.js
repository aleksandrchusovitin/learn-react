import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onChangeValue = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { onAddEmployees } = this.props;
    const { name, salary } = this.state;
    onAddEmployees(name, salary)

    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form 
          className="add-form d-flex"
          onSubmit={this.onSubmit} >
          <input 
            type="text" 
            name="name"
            className="form-control new-post-label"
            placeholder="Как его зовут?" 
            onChange={this.onChangeValue}
            value={name}
            required 
          />
          <input 
            type="text" 
            name="salary"
            className="form-control new-post-label"
            placeholder="З/П в $?" 
            onChange={this.onChangeValue}
            value={salary} 
            required
          />
          <button 
            type="submit" 
            className="btn btn-outline-light">
              Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;