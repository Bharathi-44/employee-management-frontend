import React, { Component } from 'react';
import EmployeeService from "../services/EmployeeService";
import withRouter from "./withRouter";
//import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            employee:{}
        };
    }
    componentDidMount()
    {
        //to make rest api call 
        // now getting the meploye data by id by making api call
        EmployeeService.getEmployeeById(this.props.params.id).then((response) => {
            this.setState({employee:response.data});
          });
    }
    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 '>
                    <h3 className='text-center mt-3'>View Employee Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                              <label>Employee First Name : </label>
                              <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className='row'>
                              <label>Employee Last Name : </label>
                              <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className='row'>
                              <label>Employee EmailId : </label>
                              <div>{this.state.employee.emailId}</div>
                        </div>
                        <div className='text-right'>
                        <Link to="/employees">
                  <button className="btn btn-dark">
                    Back
                  </button>
                  </Link>
                  </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ViewEmployeeComponent);