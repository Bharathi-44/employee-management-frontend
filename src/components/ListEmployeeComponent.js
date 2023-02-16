import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import withRouter from "./withRouter";
//import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

//const history = createBrowserHistory();
class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  componentDidMount() {
    //best place to do api calls
    //here EmployeeService is nothing but object ie x
    EmployeeService.getAllEmployees().then((response) => {
      this.setState({ employees: response.data });
    });
  }

  deleteEmployee(id) {
    console.log("deleteing");
    EmployeeService.deleteEmployee(id).then((response) => {
      // here we are making the employees array data without the deleted id employe data using filter
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Employee First Name</th>
                  <th>Employee Last Name</th>
                  <th>Employee Emailid</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  //after making axios call to rest api in backend and then comes back to didmount methos there sets the employees state to response data
                  //that data is being mapped here and rendiering with html elemenst for wole data
                  this.state.employees.map((each) => {
                    return (
                      <tr key={each.id}>
                        <td>{each.firstName}</td>
                        <td>{each.lastName}</td>
                        <td>{each.emailId}</td>
                        <td>
                          <Link to={`/update-employee/${each.id}`}>
                            <button className="btn btn-info mr-2">
                              Update
                            </button>
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => this.deleteEmployee(each.id)}
                          >
                            Delete
                          </button>
                          <Link to={`/view-employee/${each.id}`}>
                            <button className="btn btn-info ml-2">View</button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ListEmployeeComponent);
