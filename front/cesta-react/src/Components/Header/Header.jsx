import { NavLink } from "react-router-dom";
import "./Header.css";
import Home from "../../Pages/Home/Home";
import Cesta from "../../Pages/Cesta/Cesta";
import About from "../../Pages/About/About";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/cesta">cesta</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
