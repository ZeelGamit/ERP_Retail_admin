import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from "react-router-dom"
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, auth, setAuth }) => {

  const Logout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
    <StyledMenu open={open}>
      <Link to="/home/businesses/getallbusinesses">Users</Link>
      <Link to="/home/acmanagers/getallacmanagers">Account Managers</Link>
      <Link to="/home/coupons/getallcoupons">Coupons</Link>
      <Link to="/home/revenue">Revenue</Link>
      <Link to="/auth" onClick={Logout}>Logout</Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  auth: bool.isRequired,
  setAuth : func.isRequired
};

export default Menu;
