import React, { Component } from "react";
import { createBrowserHistory } from "history";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const history = createBrowserHistory();
class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    // this.cancel = this.cancel.bind(this);
  }
  changeFirstNameHandler = function (event) {
    return this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = function (event) {
    return this.setState({ lastName: event.target.value });
  };
  changeEmailIdHandler = function (event) {
    return this.setState({ emailId: event.target.value });
  };
  saveEmployee = function (event) {
    event.preventDefault();
    //here employee is the object olding all the current being added employe data from form
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log(JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then((response) => {
      history.push("/employees");
      window.location.reload();
    });
    //here calling create employee method from service class to make arest api post call from fronend with data
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      required
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      required
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address:</label>
                    <input
                      required
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveEmployee}
                  >
                    Save
                  </button>
                  <Link to="/employees">
                    <button className="btn btn-danger ml-3">Cancel</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
