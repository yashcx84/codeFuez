import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useAuth } from "../store/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCloseFullscreen } from "react-icons/md";

function Navbar() {
  const { isLoggedIn } = useAuth();

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const hideMenu = () => {
    setMenu(false);
  };

  return (
    <header>
      <div className="row">
        <div className="logo-brand">
          <NavLink to="/">
            <h1>
              code<span>Fuez</span>
            </h1>
          </NavLink>
        </div>
        <div className="hamburger cursor-pointer" onClick={toggleMenu}>
          {menu ? (
            <MdOutlineCloseFullscreen className="p-2 text-5xl hover:text-white hover:bg-black rounded-full transition-all duration-200 active:scale-95" />
          ) : (
            <GiHamburgerMenu className="p-2 text-5xl hover:text-white hover:bg-black rounded-full transition-all duration-200 active:scale-95" />
          )}
        </div>
        <nav className={menu ? "open" : ""}>
          {isLoggedIn ? (
            <>
              <NavLink to="/home" activeClassName="active" onClick={hideMenu}>
                Home
              </NavLink>
              <NavLink to="/about" activeClassName="active" onClick={hideMenu}>
                About
              </NavLink>
              <NavLink
                to="services"
                activeClassName="active"
                onClick={hideMenu}
              >
                Services
              </NavLink>
              <NavLink to="/logout" activeClassName="active" onClick={hideMenu}>
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" activeClassName="active" onClick={hideMenu}>
                Welcome 🍿
              </NavLink>
              <NavLink to="/login" activeClassName="active" onClick={hideMenu}>
                Login
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
