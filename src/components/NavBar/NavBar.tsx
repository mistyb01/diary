import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/journal">journal</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
