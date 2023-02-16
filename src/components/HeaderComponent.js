import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <a href="#" className="navbar-brand">
            Employee Management App
          </a>
        </div>
        <div className="nav-item active ml-auto">
          <Link to="/add-employee" className="add-color">
            Add Employee
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
