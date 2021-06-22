import { Link } from "react-router-dom";
import "../App.css";

function NavbarUp(props) {
  const { userName } = props;
  return (
    <div className="nav-bar-up">
      <ul>
        <li className="navtext">
          <Link
            className="linkText"
            to={{
              pathname: "/",
              state: { newUserName: userName },
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
              state: { newUserName: userName },
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
