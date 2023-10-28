import { NavLink } from "react-router-dom";
import './header.css'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

   // Function to handle logout
   const handleLogout = () => {
  
    // Clear the authentication token
    localStorage.removeItem("tokenAuth");
    localStorage.removeItem("loggedUser");

    // Redirect to the login page
    navigate("/login");
  };

    return (
        <nav className="navbar navbar-expand-md text-white bg-f">
   <div className="container-fluid">
    <NavLink className="navbar-brand border border-dark fw-bold fst-italic p-1" to={"/"} >URL Shortener</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" navbar-nav ms-auto mb-lg-0 mx-4 fs-5">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard-url">Dashboard</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/create-url">Create URL</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/all-url">All URLs</NavLink>
        </li>  */}
        <li>
        <Button
                        variant="link"
                        className="logout-icon text-white"
                        onClick={handleLogout}
                      >
                        <i class="fa-solid fa-power-off"></i>
                      </Button>
            </li>
      </ul>
    </div>
  </div> 
  
</nav>
    )
}

export default Header;