import "./Header.css";

import { NavItem } from "../../Components/index";
import { FaAlignJustify } from "react-icons/fa";

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container">
          <Link to="/">
            <div className="logo">
              <img className="img-fluid" src={logo} alt="IT_Logo" />
            </div>
          </Link>

          <Link className="navbar-brand hover-white" to="/">
            طلاب تكنولوجيا المعلومات
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaAlignJustify className="menu-btn text-light" />
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="nav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <NavItem link="/" active="true">
                الصفحة الرئيسية
              </NavItem>
              <NavItem link="/offers">العروضات</NavItem>
              <NavItem link="/project_groups">المشاريع</NavItem>
              <NavItem link="/switch_courses">الشعب</NavItem>
              <NavItem link="/about_us">من نحن</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
