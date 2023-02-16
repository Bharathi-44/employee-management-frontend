import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container pt-3">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />}></Route>
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            <Route exact path="/add-employee" element={<CreateEmployeeComponent />}></Route>
            <Route exact path="/update-employee/:id" element={<UpdateEmployeeComponent />}></Route> 
            <Route exact path="/view-employee/:id" element={<ViewEmployeeComponent />}></Route> 

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
