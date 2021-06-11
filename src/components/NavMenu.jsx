import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { NavMenuStyles } from '../assets/style/NavMenuCss';

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);

  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems-hide-items' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/Portfolio_dev"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio_dev/about"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio_dev/projets"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio_dev/contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
