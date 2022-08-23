import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbar/Elements';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../images/logo_marista.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>
            Sobre
          </NavLink>
          <NavLink to='/contact'>
            Contato
          </NavLink>
          <NavLink to='/portfolio'>
            Portfolio
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
