import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const setStyle = ({ isActive }) => ({ color: isActive ? "red" : "green" });

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/profile" style={setStyle}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" style={setStyle}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" style={setStyle}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" style={setStyle}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" style={setStyle}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
