import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <h2 className="navbar-brand"><Link to="/">Nia Jelwery</Link></h2>
      </div>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/category/bracelet">Bracelets</NavLink>
          </li>
          <li>
            <NavLink to="/category/ring">Rings</NavLink>
          </li>
          <li>
            <NavLink to="/category/necklace">Necklaces</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Carrito</NavLink>
          </li>
        </ul>

      <CartWidget />
    </nav>
  );
}
