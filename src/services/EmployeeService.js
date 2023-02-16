import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/employees";
//the url must be same in the backend
class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
    //here making call to rest api sepcified here and getting back the response ffrom backend
  }
  createEmployee(employee)
  {
    return axios.post(EMPLOYEE_API_BASE_URL,employee)
  }
  getEmployeeById(id)
  {
    return axios.get(EMPLOYEE_API_BASE_URL+'/'+id)
  }
  updateEmployee(employee,empId)
  {
    return axios.put(EMPLOYEE_API_BASE_URL+'/'+empId,employee)
  }
  deleteEmployee(id)
  {
    return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id)
  }
}

let x=new EmployeeService()
export default x;
