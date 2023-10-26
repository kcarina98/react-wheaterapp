import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <NavLink to="/Hamburg">Hamburg</NavLink>
      <NavLink to="/Berlin">Berlin</NavLink>
      <NavLink to="/Köln">Köln</NavLink>
      <NavLink to="/Schweden">Schweden</NavLink>
    </header>
  );
};

export default Header;
