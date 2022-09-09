import "./navbar.scss";
import menuIcon from "../../images/Hamburger_icon.svg.png";
import { useState } from "react";
import { Link, Navlink } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  const menuItems = [
    {
      id: 1,
      menu: "home",
      link: "/home",
    },
    {
      id: 2,
      menu: "about",
      link: "/about",
    },
    {
      id: 3,
      menu: "blog",
      link: "/blog",
    },
    {
      id: 4,
      menu: "contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <Link to="/" className="navbar__logo">
            Logo
          </Link>
          <button onClick={showMenu} className="navbar__toggle">
            <img src={menuIcon} alt="" width="40px" />
          </button>
          <div
            className={
              menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"
            }
          >
            {menuItems.map((menuItem) => {
              return (
                <Link
                  key={menuItem.id}
                  className="navbar__menu__link"
                  to={menuItem.link}
                >
                  {menuItem.menu}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
