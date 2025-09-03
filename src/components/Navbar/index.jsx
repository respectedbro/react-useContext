import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        HOME
      </NavLink>

      <NavLink
        to="posts"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Посты
      </NavLink>
    </nav>
  );
};

export default Navbar;
