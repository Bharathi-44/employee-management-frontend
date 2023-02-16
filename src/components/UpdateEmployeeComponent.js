import React, { Component } from "react";
import { createBrowserHistory } from "history";
import EmployeeService from "../services/EmployeeService";
import withRouter from "./withRouter";
//import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const history = createBrowserHistory();

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    //this.cancel = this.cancel.bind(this);
  }
  componentDidMount() {
    //once on clicking on update button then based on id it gets data from backend using api call
    //that  particular id data is stored back in the form for the user
    //further user will makes changes accordingly and it gets updated
    //this method is used to make api call just while loading the page
    EmployeeService.getEmployeeById(this.props.params.id).then((response) => {
      let employeeData = response.data;
      this.setState({
        firstName: employeeData.firstName,
        lastName: employeeData.lastName,
        emailId: employeeData.emailId,
      });
    });
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
  updateEmployee = function (event) {
    event.preventDefault();
    // in form we are preventing the submit form
    //after getting the data from backend using api call then here the canges made will be saved
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log(JSON.stringify(employee));
    EmployeeService.updateEmployee(employee, this.props.params.id).then(
      (response) => {
        history.push("/employees");
        console.log(response.data);
        window.location.reload();
      }
    );
  };
  //cancel = function () {
  //history.push("/employees");
  // this.props.history.push("/add-employee");--thos wrong approach old one
  //window.location.reload();
  //};
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset md-3 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
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
                    onClick={this.updateEmployee}
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

export default withRouter(UpdateEmployeeComponent);
