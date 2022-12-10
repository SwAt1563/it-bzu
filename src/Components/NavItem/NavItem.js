import "./NavItem.css";
import { Link } from "react-router-dom";
const NavItem = (props) => {
  let classes = "text-light nav-link p-2 p-lg-3 ";
  if (props.active) {
    classes += "active";
  }
  return (
    <>
      <li className="nav-item">
        <Link className={classes} to={props.link}>
          {props.children}
        </Link>
      </li>
    </>
  );
};

export default NavItem;
