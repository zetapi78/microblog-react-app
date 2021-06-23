import { Link } from "react-router-dom";
import "../App.css";

function NavbarUp() {
  return (
    <div className="nav-bar-up">
      <ul>
        <li className="navtext">
          <Link
            className="linkText"
            to={{
              pathname: "/",
            }}
          >
            Home
          </Link>
        </li>
        <li className="navtext">
          <Link
            className="linkText"
            to={{
              pathname: "/profile",
            }}
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavbarUp;
